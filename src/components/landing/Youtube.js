import React, { useEffect, useState } from 'react';
import './youtube.css';
import Navbar from './Navbar';
import Footer from './Footer';

function YouTubeVideos() {
  const API_Key = 'AIzaSyBBY9_f82yajZf0hzgW75CkXtYYYqCSXwE';
  const Channel_ID = 'UCWv7vMbMWH4-V0ZXdmDpPBA';
  const Max_Results = 3;
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${Channel_ID}&maxResults=${Max_Results}&key=${API_Key}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the data received from the API
        if (data.items) {
          setVideoList(data.items);
        } else {
          console.log('Invalid API key or channel ID.');
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    {/* <Navbar/> */}
    <div className="text-center pb-2">
    <p className="section-title px-5">
      <span className="px-2">lectures</span>
    </p>
    <h1 className="mb-4">view Our lectures</h1>
  </div>
    <div className="video-container">
      {videoList.length > 0 ? (
        videoList.map((item) => (
          <div className="col-lg-4 mb-4" key={item.id.videoId}>
            <div className="card border-0 shadow-sm mb-2">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                frameBorder="0"
                allowFullScreen
                title={item.snippet.title}
              ></iframe>
              <div className="card-body bg-light text-center p-4">
                <h4>{item.snippet.title}</h4>
                <div className="d-flex justify-content-center mb-3">
                  <small className="mr-3">
                    <i className="fa fa-user text-primary"></i> Admin
                  </small>
                  <small className="mr-3">
                    <i className="fa fa-folder text-primary"></i> Web Design
                  </small>
                  <small className="mr-3">
                    <i className="fa fa-comments text-primary"></i> 15
                  </small>
                </div>
                <p>
                  Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                  eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                  lorem. Tempor ipsum justo amet stet...
                </p>
                <a href="" className="btn btn-primary px-4 mx-auto my-2">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="error">No videos found.</p>
      )}
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default YouTubeVideos;
