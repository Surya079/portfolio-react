import{r as a,h as C,j as e,T as w,a as S,t as N,v as T,w as o,I as l,x as E,y as k,S as L,z as A,D,E as I}from"./index-DjCb9QRt.js";const P=()=>{const[c,u]=a.useState(""),[n,p]=a.useState(!1),[i,x]=a.useState(""),m=C();a.useEffect(()=>{u(`
      <h1 class="text-2xl font-bold mb-4">My Experience Watching "The Grand Adventure"</h1>
      <p class="mb-4">
        Watching "The Grand Adventure" was an incredible experience. From the stunning visuals to the emotionally captivating storyline,
        I found myself fully immersed in the movie. Let me share some highlights.
      </p>
      <h2 class="text-xl font-semibold mt-4 mb-2">The Cinematography</h2>
      <p class="mb-4">
        The visuals were breathtaking. Every scene was a masterpiece, with perfect lighting, angles, and vibrant colors.
      </p>
      <pre><code class="language-javascript">// Favorite scenes from the movie
const favoriteScenes = ["Opening Sequence", "Climactic Battle", "Heartwarming Ending"];
favoriteScenes.forEach(scene => console.log(\`Loved: \${scene}\`));
</code></pre>
      <h2 class="text-xl font-semibold mt-4 mb-2">The Soundtrack</h2>
      <p class="mb-4">
        The music was phenomenal and added depth to every scene. I couldn't help but hum along to the beautiful melodies.
      </p>
      <h2 class="text-xl font-semibold mt-4 mb-2">Watch This Clip</h2>
      <video controls width="100%" class="rounded">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `)},[]);const g=t=>{const y=new DOMParser().parseFromString(t,"text/html");return Array.from(y.body.childNodes).map((s,r)=>{if(s.nodeName==="PRE"){const f=s.querySelector("code").textContent;return e.jsx(D,{language:"javascript",style:I,className:"my-4 p-2 rounded bg-gray-100",children:f},r)}else return s.nodeName==="VIDEO"?e.jsx("video",{controls:!0,width:"100%",className:"rounded my-4",src:s.querySelector("source").src,type:s.querySelector("source").type},r):e.jsx("div",{dangerouslySetInnerHTML:{__html:s.outerHTML}},r)})},v=()=>{p(!n)},b=()=>{m("create-blog")},h=t=>{m(`profile/${t}`)},j=t=>{x(t.target.value)},d=c.toLowerCase().includes(i.toLowerCase())?c:"";return e.jsxs("div",{className:"bg-gray-100 min-h-screen mt-3",children:[e.jsxs("div",{className:"flex justify-between items-center  p-4 bg-white shadow",children:[e.jsx(w,{variant:"outlined",size:"small",placeholder:"Search blogs...",className:"w-2/3",value:i,onChange:j}),e.jsx(S,{variant:"contained",startIcon:e.jsx(N,{}),onClick:b,className:"button ",children:"Write"})]}),d&&e.jsxs("div",{className:"max-w-4xl mx-auto mt-6 p-6 bg-white rounded shadow",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(T,{alt:"User Avatar",src:"https://via.placeholder.com/150",className:"cursor-pointer",onClick:()=>h("123")}),e.jsxs("div",{className:"ml-3 cursor-pointer",onClick:()=>h("123"),children:[e.jsx("p",{className:"text-lg font-semibold",children:"John Doe"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Posted on October 10, 2024"})]})]}),e.jsx("div",{children:g(d)}),e.jsxs("div",{className:"flex justify-between items-center mt-6",children:[e.jsx(o,{title:"Like",children:e.jsx(l,{children:e.jsx(E,{})})}),e.jsx(o,{title:"Comment",onClick:v,children:e.jsx(l,{children:e.jsx(k,{})})}),e.jsx(o,{title:"Share",children:e.jsx(l,{children:e.jsx(L,{})})})]}),n&&e.jsx(A,{open:n})]})]})};export{P as default};
