import styles from "./Netflix.module.css";
import styled from 'styled-components';



export const SeriesCard = ({data}) => {

    const {img_url,name,watch_url,cast,genre,rating,description}=data;

    //const btn_style ={}

   /* const ButtonSneha = styled.button ({
        padding: "1.2rem 2.4rem",
                border: "none",
                fontSize: "1.6rem",
                background: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
                color: "var(--btn-color)",
                fontWeight: "bold",
                cursor: "pointer",

    });*/

    const ButtonSneha = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-Size: 1.6rem;
    background-color: ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--btn-color);
    font-Weight: bold;
    cursor: pointer;
    `;

    const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
    `;


    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;


    return (
        <li className={styles.card}>
        <div>
            <img src={img_url} alt={img_url} width="40%" height="40%" />
        </div>
       { /*<div className={styles["card-content"]}>*/}
            <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
            <h2>Name: {name}</h2>
            <Rating>
                Rating: 
                <span className={`${styles.rating} ${ratingClass}`}>
                     {rating} 
                </span> 
            </Rating>
            <p className="text-3xl font-bold underline">Summary: {description}</p>
            <p>Genre: {genre.join(", ")}</p>
            <p>Cast: {cast.join(", ")}</p>
            <a href={watch_url} target="_blank">
            {/*<button style={btn_style}> Watch Now </button>*/}
            <ButtonSneha rating={rating}> Watch Now </ButtonSneha>
                </a>  

        </div>
         
        
      </li>
    );
}