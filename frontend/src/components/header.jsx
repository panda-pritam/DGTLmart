import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

export default function Header({ setList, setLoading }) {
  let [text, setText] = useState("");
  let [timer, setTimer] = useState("");
  //   let Snackbar = enqueueSnackbar();
  useEffect(() => {
    console.log("page loaded");
    setLoading(true);
    // (async () => {
    //   if (text.length == 0) {

    //   }
    // })();
    if (timer) {
      clearTimeout(timer);
    }
    let timerid = setTimeout(() => {
      (async () => {
        try {
          setLoading(true);
          let list;

          if (text.length > 0) {
            list = await axios(
              `https://dgtlmart-2.onrender.com/v1/videos?title=${text}`
            );
          } else {
            list = await axios(`https://dgtlmart-2.onrender.com/v1/videos`);
          }
          console.log(list.data.videos);
          setList(list.data.videos);
          setLoading(false);
        } catch (error) {
          enqueueSnackbar("Some Thing went worng", { variant: "error" });
          setLoading(false);
        }
      })();
    }, 300);
    setTimer(timerid);
  }, [text]);
  let onSubmitHandle = async (e) => {
    e.preventDefault();
    console.log(text);
    setLoading(true);
    let list;
    try {
      if (text.length > 0) {
        list = await axios(
          `https://dgtlmart-2.onrender.com/v1/videos?title=${text}`
        );
      } else {
        list = await axios(`https://dgtlmart-2.onrender.com/v1/videos`);
      }
      console.log(list.data.videos);
      setList(list.data.videos);
      //   if (list.data.videos.length === 0) {
      //     enqueueSnackbar(`No Data present with is Title ${text}`, {
      //       variant: "warning",
      //     });
      //   }
      setLoading(false);
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status) {
        return enqueueSnackbar(`No Data present with is Title ${text}`, {
          variant: "warning",
        });
      }
      enqueueSnackbar(`Some Thing went worng ${error.response.data.message}`, {
        variant: "error",
      });
      setLoading(false);
      setText("");
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="Header"
      >
        <form onSubmit={onSubmitHandle}>
          <input
            placeholder="Search videos by title"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <IconButton
            aria-label="toggle password visibility"
            edge="end"
            type="submit"
          >
            <SearchIcon fontSize="large" />
          </IconButton>
        </form>
      </Box>
    </Box>
  );
}
