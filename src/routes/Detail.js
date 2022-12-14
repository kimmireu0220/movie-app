import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [waiting, setWaiting] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getDetail = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();  
    setDetail(json.data.movie);
    setWaiting(false);
  };
  useEffect(() => {
    getDetail();
  }, )
  return (
    <div>
      {waiting ? (
      <h1>Waiting...</h1>
      ) : (
        <div className={styles.container}>
          <h1>{`Title : ${detail.title}`}</h1>
          <img src={detail.medium_cover_image} alt={detail.title}></img>
          <h2>{`rating : ${detail.rating}`}</h2>
          <h2><a href={detail.url} target="_blank" rel="noreferrer">More Infomation</a></h2>
        </div>
        )}
    </div>
  );          
}

export default Detail;