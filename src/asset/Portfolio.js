import React from 'react';

function Portfolio(){
    return(
        <div className="portfolio">
            <h3 className="title">Portfolio</h3>
            <ul className="list">
                <li className="whale-on"><a href="https://campaign.naver.com/whaleonstudy/" target="_blank"><span className="vh">WhaleOn Campaign Website</span></a></li>
                <li className="netflix"><a href="https://m.search.naver.com/p/n.search/csearch/content/eprender.nhn?q=%EC%98%A4%EC%A7%95%EC%96%B4%20%EA%B2%8C%EC%9E%84&where=m&pkid=356" target="_blank"><span className="vh">Naver Search Netflix Series End Page</span></a></li>
                <li className="hanguel"><a href="https://hangeul.naver.com/font/maru" target="_blank"><span className="vh">Hanguel font Website</span></a></li>
                <li className="gratitude"><a href="https://apple3243.github.io/dailyGratitude/" target="_blank"><span className="vh">Daily Gratitude Website</span></a></li>
            </ul>
        </div>
    )
}

export default Portfolio;