//  defines "le blob" (jeg lager dette sent på kvelden, må ha litt humor)
const blob = document.getElementById("blob");

//  dytt den stakkars blobben så den blir bestukket av musa
document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: clientX + "px",
        top: clientY + "px"
    }, {duration: 3000, fill: "forwards"})
}