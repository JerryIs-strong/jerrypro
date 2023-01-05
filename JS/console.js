const ascii =
"*       ><<><<<<<<<<><<<<<<<    ><<<<<<<    ><<      ><<          \n"+ 
"*       ><<><<      ><<    ><<  ><<    ><<   ><<    ><<           \n"+
"*       ><<><<      ><<    ><<  ><<    ><<    ><< ><<             \n"+
"*       ><<><<<<<<  >< ><<      >< ><<          ><<               \n"+
"*       ><<><<      ><<  ><<    ><<  ><<        ><<     ==        \n"+
"*  ><   ><<><<      ><<    ><<  ><<    ><<      ><<               \n"+
"*   ><<<<  ><<<<<<<<><<      ><<><<      ><<    ><<               \n";

console.log('%c'+ ascii,'color: #d6b8c6fa;')          
console.log(
    'Powered by %cJERRY_PRO%cV1.4.1', 
    'display: inline—block;background-color:rgba(66,66,66,0.8);color:#fff;margin—bottom:6px;padding:4px;border-radius:4px 0 0 4px',
    'display: inline-block;background-color:rgba(0,180,0,1);color:#fff;padding:4px;border-radius:0 4px 4px 0', 
    '\n\nLatest on 5st January',
    '\nAll copyrights reserved',
) 

const alert = "//警告！⚠️";
const alertA = "使用這個主控台可能會讓攻擊者有機會利用名為 Self-XSS 的攻擊方式冒用你的身分，然後竊取你的資訊。請勿輸入或貼上來路不明的程式碼。//"
console.log('%c'+ alert,'color: red;background-color: yellow;font-size: 25px;font-weight: 500;')
console.log('%c'+ alertA,'font-size: 15px;')
