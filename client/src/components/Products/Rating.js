import styled from "styled-components";

const RateBox = styled.h3`
    font-size: 15px;
    opacity: 0.5;
    margin-left: 5px;
    padding: 5px;
    background: #ace3f5;
    border: 2px solid #ace3f5;
    border-radius: 5px;
    width: 130px;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Rating = ({value,text, color}) => {
  return (
    <div >
        <RateBox >
            {/* {value} from {text} */}
            <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>{text && text}</span>
        </RateBox>
    </div>
  )
}

Rating.defaultProps = {
    color: 'black',
}

export default Rating