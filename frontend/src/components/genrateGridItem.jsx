import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import styles from "./grid.module.css";

let DateParser = (date) => {
  let newDate = new Date(date);
  let str = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
  return str;
};

export default function GenerateGridItem({ list }) {
  return list.map((ele) => {
    return (
      <Grid item xs={1} sm={4} md={3} key={ele._id}>
        <Box className={styles.GridItem}>
          <Box className={styles.ImgBox}>
            <img
              src={ele.previewImage}
              alt="Video Thumnail image"
              className={styles.image}
            />
          </Box>
          <Box className={styles.InfoBox}>
            <p className={styles.titleText}>Title:- {ele.title}</p>
            <Box className={styles.DateBox}>
              <p>Views:- {ele.viewCount}</p>
              <p>Released Date:- {DateParser(ele.releaseDate)}</p>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  });
}
