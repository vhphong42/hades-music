import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { faSearch, faXmark, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PlayListSong from '../../Feature/PlayListSong';
import { AccountPropose } from '../Propose';
import { SearchApi } from '../../services';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { Loading } from '../Icons';

const cx = classNames.bind(styles);

// Check if SpeechRecognition is available
const isSpeechRecognitionAvailable = window.SpeechRecognition || window.webkitSpeechRecognition;

function Search({ visibleHeaderMobile, handleSearchForm }) {
    const [value, setValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [visible, setVisible] = useState(false);
    const [loadingSearch, setLoadingSearch] = useState();
    const containerRef = useRef();

    const recognition = isSpeechRecognitionAvailable ? new (window.SpeechRecognition || window.webkitSpeechRecognition)() : null;

    // handle Event
    const handleType = (e) => {
        setValue(e.target.value);

        if (!e.target.value) {
            setSearchResult([]);
        }
    };

    const handleFocus = () => {
        setVisible(true);
    };

    const handleOffResult = (e) => {
        if (containerRef?.current) {
            if (containerRef.current?.contains(e.target)) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    };

    const handleClear = () => {
        setValue('');
        setSearchResult([]);
        setVisible(true);
    };

    const startVoiceSearch = () => {
        if (recognition) {
            recognition.start();
        }
    };

    const handleSearch = async () => {
        if (value) {
            setLoadingSearch(true);
            const result = await SearchApi(value);
            setSearchResult(result);
            setLoadingSearch(false);

            // Hiển thị thông báo nếu không có kết quả tìm kiếm
            if (result.length === 0) {
                alert('Không có bài hát này.');
            }
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (value) {
                handleSearch(); // Thực hiện tìm kiếm sau khi nhập
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [value]);

    useEffect(() => {
        window.addEventListener('click', (e) => handleOffResult(e));

        if (recognition) {
            recognition.onresult = (event) => {
                const speechToText = event.results[0][0].transcript;
                setValue(speechToText);
            };
        }

        return () => window.removeEventListener('click', (e) => handleOffResult(e));
    }, [recognition]);

    return (
        <div className={cx('wrapper')} ref={containerRef}>
            <div
                className={cx(
                    'search_input',
                    visible || visibleHeaderMobile ? 'isCollap' : '',
                )}
            >
                <FontAwesomeIcon icon={faSearch} className={cx('button_search')} onClick={handleSearch} />
                <input
                    value={value}
                    onFocus={handleFocus}
                    onChange={handleType}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                />
                {value && !loadingSearch && (
                    <FontAwesomeIcon
                        icon={faXmark}
                        onClick={handleClear}
                        className={cx('button_close')}
                    />
                )}
                {loadingSearch && (
                    <div className={cx('button_loading')}>
                        <Loading />
                    </div>
                )}

                <FontAwesomeIcon
                    icon={faMicrophone}
                    onClick={startVoiceSearch}
                    className={cx('button_voice')}
                />

                {(visible || visibleHeaderMobile) && (
                    <div className={cx('result_search')}>
                        <h4 className={cx('result_title')}>
                            {searchResult.length > 0
                                ? 'Gợi ý kết quả'
                                : 'Nhập thông tin tìm kiếm'}
                        </h4>
                        {searchResult.length > 0 ? (
                            <>
                                <AccountPropose
                                    onHandle={visibleHeaderMobile ? handleSearchForm : () => setVisible(false)}
                                    data={searchResult ? searchResult : undefined}
                                />
                                {searchResult.map((item, index) => {
                                    return (
                                        <PlayListSong
                                            song={item}
                                            index={index}
                                            key={index}
                                            data={searchResult}
                                        />
                                    );
                                })}
                            </>
                        ) : (
                            <p className={cx('no_result_message')}></p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default React.memo(Search);

Search.propTypes = {
    visibleHeaderMobile: PropTypes.bool,
    handleSearchForm: PropTypes.bool,
};
