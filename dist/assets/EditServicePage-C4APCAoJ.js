import{r as l,j as e,C as b,i as o,B as r}from"./index-DjCb9QRt.js";import{m as g}from"./proxy-5NgnpoaW.js";const f=[{id:1,before:"/images/before-edit-pic-1.JPG",after:"/images/after-edit-pic-1.jpg",description:"Enhanced lighting and removed imperfections."},{id:2,before:"/images/before-edit-pic-2.JPG",after:"/images/after-edit-pic-2.jpg",description:"Color correction and sharpening applied."},{id:3,before:"/images/before-edit-pic-3.JPG",after:"/images/after-edit-pic-3.jpg",description:"Skin retouching for a polished portrait."}],u=[{id:1,title:"Quality Banner Editing",description:"We specialize in creating high-quality banners for your business needs.",image:"/images/banner-img1.jpg"},{id:2,title:"Business Marketing Banners",description:"Professional banners designed to enhance your marketing campaigns.",image:"/images/banner-img2.jpg"},{id:3,title:"Custom Event Banners",description:"Custom-designed banners for any event, big or small.",image:"/images/banner-img3.jpg"}],w=()=>{const[a,h]=l.useState(50),s=l.useRef([]),c=(t,n)=>{const i=s.current[n];if(!i)return;const d=i.getBoundingClientRect(),m=t.clientX-d.left,x=Math.max(0,Math.min(100,m/d.width*100));h(x)},p=(t,n)=>{const i=t.touches[0].clientX;c({clientX:i},n)};return e.jsxs(b,{maxWidth:"lg",sx:{py:8},children:[e.jsx(o,{variant:"h3",fontWeight:"bold",textAlign:"center",sx:{mb:4,fontSize:{xs:"2rem",md:"3rem"}},children:"Photo Editing & Banner Editing Service"}),e.jsx(o,{variant:"subtitle1",textAlign:"center",sx:{mb:8,color:"gray",fontSize:{xs:"0.9rem",md:"1.2rem"}},children:"Drag the slider to compare the original and edited photos."}),f.map((t,n)=>e.jsxs(r,{ref:i=>s.current[n]=i,sx:{position:"relative",width:"100%",maxWidth:"800px",aspectRatio:"12/9",margin:"0 auto 6rem",overflow:"hidden",borderRadius:"16px",boxShadow:"0 10px 20px rgba(0,0,0,0.1)",backgroundColor:"black"},children:[e.jsx(r,{component:"img",src:t.before,alt:"Before Edit",sx:{position:"absolute",top:0,right:-160,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",zIndex:1,opacity:.8}}),e.jsx(r,{component:"img",src:t.after,alt:"After Edit",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",zIndex:2,clipPath:`polygon(0 0, ${a}% 0, ${a}% 100%, 0 100%)`}}),e.jsx(r,{onMouseDown:i=>i.preventDefault(),onMouseMove:i=>c(i,n),onTouchMove:i=>p(i,n),sx:{position:"absolute",top:0,left:`${a}%`,width:"4px",height:"100%",backgroundColor:"#fff",zIndex:3,cursor:"ew-resize",transition:"background-color 0.2s","&:hover":{backgroundColor:"red"}}}),e.jsx(r,{onMouseDown:i=>i.preventDefault(),sx:{position:"absolute",top:"50%",left:`${a}%`,transform:"translate(-50%, -50%)",width:"20px",height:"20px",backgroundColor:"#fff",borderRadius:"50%",boxShadow:"0 4px 8px rgba(0,0,0,0.2)",zIndex:4,cursor:"pointer","&:hover":{backgroundColor:"red"}}}),e.jsx(o,{variant:"subtitle1",textAlign:"center",sx:{mt:2,color:"gray",fontSize:{xs:"0.8rem",md:"1rem"}},children:t.description})]},t.id)),e.jsx(o,{variant:"h3",fontWeight:"bold",textAlign:"center",sx:{mt:8,mb:4,fontSize:{xs:"2rem",md:"3rem"}},children:"Our Services"}),e.jsx(o,{variant:"subtitle1",textAlign:"center",sx:{mb:8,color:"gray",fontSize:{xs:"0.9rem",md:"1.2rem"}},children:"Discover the various banner editing services we offer to help your brand stand out."}),u.map(t=>e.jsxs(r,{sx:{position:"relative",width:"100%",maxWidth:"500px",margin:"0 auto 6rem",borderRadius:"16px",boxShadow:"0 10px 20px rgba(0,0,0,0.1)",overflow:"hidden",backgroundColor:"black","&:hover .hover-content":{opacity:1,transform:"translateY(0)"}},children:[e.jsx(r,{component:"img",src:t.image,alt:t.title,sx:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}),e.jsxs(r,{className:"hover-content",sx:{position:"absolute",bottom:0,left:0,right:0,background:"rgba(0, 0, 0, 0.5)",padding:"1rem",color:"white",opacity:0,transform:"translateY(100%)",transition:"all 0.3s ease"},children:[e.jsx(o,{variant:"h5",fontWeight:"bold",sx:{mb:1},className:"text-white",children:t.title}),e.jsx(o,{variant:"body1",sx:{fontSize:"1rem"},className:"text-white",children:t.description})]})]},t.id)),e.jsxs(g.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1.5,delay:.5},style:{textAlign:"center",marginTop:"60px"},children:[e.jsx(o,{variant:"h5",sx:{color:"text.primary",mb:2},children:"Ready to transform your ideas?"}),e.jsx(g.a,{href:"/contact",whileHover:{scale:1.1},whileTap:{scale:.9},className:"inline-block px-8 py-4 text-white bg-blue-600 rounded-lg shadow hover:text-white",children:"Contact Me Now"})]})]})};export{w as default};