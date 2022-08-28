import React from 'react';
import { TextField,Button } from '@mui/material';
import { styled } from '@mui/material/styles';

//スタイルの定義
const useStyles = styled((theme) => ({
    textArea: {
        marginRight: theme.spacing(2),
  },
}));


function PostFrom(props) {
  //定義したスタイルを利用するための設定
  const classes = useStyles();
  const { data, inputChange, btnFunc} = props;
  return (
    <form>
        <TextField id="name" label="タスク名" variant="outlined" className={classes.textArea} name="name" value={data.name} onChange={inputChange} />
        <TextField id="content" label="内容" variant="outlined" className={classes.textArea} name="content" value={data.content} onChange={inputChange} />
        <Button color="primary" variant="contained" href="/" onClick={btnFunc}>登録</Button>
    </form>
  );
}

export default PostFrom;
