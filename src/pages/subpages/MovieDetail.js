import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { API_URL } from '../../config/apiurl';
import './MovieDetail.scss';

const MovieDetail = ({data}) => {
    return (
        <div className='moviedetail inner'>
            <div className='detailbox'>
                <div className='top_zone'>
                    <div className='left'>
                        <div className='title'>
                            <h3>{data.mov_title}</h3>
                                
                        </div>
                        <div className='movieinfo'>
                            <div className='tablebox'>
                                <table className='infotable'>
                                    <tbody>
                                        <tr>
                                            <td width='38%'>
                                                <strong>장르</strong>
                                                <span>: {data.mov_genre}</span>
                                            </td>
                                            <td width='15%'>
                                                <strong>나라</strong>
                                                <span>: {data.mov_country}</span>
                                            </td>
                                            <td width='20%'>
                                                <strong>상영시간</strong>
                                                <span>: {data.mov_runnigtime}</span>
                                            </td>
                                            <td>
                                                <strong>개봉일</strong>
                                                <span>: {data.mov_date}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>감독</strong>
                                                <span>: {data.mov_director}</span>
                                            </td>
                                            <td colSpan={3}>
                                                <strong>배우</strong>
                                                <span>: {data.mov_actor}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>관람연령</strong>
                                                <span>: {data.mov_limit}</span>
                                            </td>
                                            <td colSpan={3}>
                                                <strong>평점</strong>
                                                <span>: {data.mov_score}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <img src={`${API_URL}/${data.mov_img}`} alt=''/>
                    </div>
                </div>
                <div className='moviedesc'>
                        <p><strong>영화 줄거리</strong></p>
                        <p>{data.mov_desc}</p>
                </div>
                <div className='bottom_zone'>
                    <div className='movie_trailer'>
                        <p><strong>영화 메인 예고편</strong></p>
                        <ReactPlayer className="youtube"
                            url={`${data.mov_movelink}`}
                            width="600px"
                            heigh="400px"
                            muted={true}
                            playing={true}
                            loop={true}
                            controls={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;