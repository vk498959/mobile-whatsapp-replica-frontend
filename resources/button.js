addEventListener("load",()=>{
    const body=document.getElementsByClassName("body")[0];
    const calls=document.getElementsByClassName("selectcalls")[0];
    const chats=document.getElementsByClassName("selectchats")[0];
    const status=document.getElementsByClassName("selectstatus")[0];
    const camera=document.getElementsByClassName("selectcamlogo")[0];
    
    calls.addEventListener("click",()=>{
        console.log("call is clicked");
        body.innerHTML="nocalls";
    });

    chats.addEventListener("click",()=>{
        body.innerHTML=`
        <div class="contacts">
        <div>
        <div class="photo"></div>
        </div>
        <div>
        <div class="name">Jhonny</div>
        <div class="message">meet you today evening</div>
        </div>
        <div class="tn">
        <div class="time">2:30 AM</div>
        <div class="number">2</div>
        </div>
        </div>`;
        addEventListener("load",()=>{
            


        });
    });

    status.addEventListener("click",()=>{
        console.log("status is clicked");
        body.innerHTML=`
        <div class="contacts">
        <div>
        <div class="photo"></div>
        </div>
        <div>
        <div class="name">No status</div>
        <div class="message">meet you today evening</div>
        </div>
        <div class="tn">
        <div class="time">2:30 AM</div>
        <div class="number">2</div>
        </div>
        </div>`;
    });

    camera.addEventListener("click",()=>{
        console.log("camera is clicked");
        body.innerHTML=`
        <canvas width="200px" height="200px"><video width="150px" height="150px" autoplay id="video"></video><canvas>
        
        `;
        var canvas=document.getElementsByTagName("canvas")[0].getContext("2d");
        var video=document.getElementById("video");
        async function cam(){
        let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	    // document.getElementById("video").srcObject = stream;
        video.srcObject=stream;
        console.log(stream);
        canvas.drawImage(video,0,0);
        }
        cam();
        

        
    });











});