import { Button } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


export default function Home(){
    return <>
    


    <div className="container mt-5">
      <div className="row">

        <div className="col-lg-7 col-md-7 col-12">
          <div>
            <h3>(FREE) Food Delivery Admin Dashboard</h3>
          
            <p>  <img className='img1' src="https://s3-alpha.figma.com/profile/76d1e250-6815-4ae8-bc79-d73a8c18c744" alt="" /> By Peterdraw | Not rated | Used By 1.3k people.</p>
          </div>
        </div>

       <div className="col-lg-5 col-md-5 col-12">
        <div className="icon1Div">
          <button className='btn1 ms-3 mt-3'>
          <BookmarkBorderIcon sx={{float:'right'}} className='icon1'/>
          </button>
        </div>
        <div className='btn1Div'>
           <Button variant="contained" className='mt-3' sx={{float:'right'}}>From Figma Link </Button>
           
        </div>
       </div>

      </div>
    </div>

    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div>
            <img className='w-100 rounded img2' src="https://s3-alpha.figma.com/hub/file/3222579568/0fa73dbd-3ac8-4492-b4dd-e1789e304c4f-cover.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    
    
    </>}