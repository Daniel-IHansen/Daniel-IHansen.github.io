destinations = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217405.76171162789!2d-8.172667026126584!3d31.634807934408727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Marokko!5e0!3m2!1sno!2sno!4v1695191295911!5m2!1sno!2sno",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417835.64227443415!2d135.7188694!3d35.09819619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3cc3f1%3A0xc0961d366bbb1d3d!2sKyoto%2C%20Japan!5e0!3m2!1sno!2sno!4v1695191257437!5m2!1sno!2sno",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163930.96841337872!2d14.465623899999999!3d50.05966965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPraha%2C%20Tsjekkia!5e0!3m2!1sno!2sno!4v1695191224848!5m2!1sno!2sno",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102754.70000128998!2d25.420630850000002!3d36.40715385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499ce86adfd9ff7%3A0xb2a761f740d68afc!2sOldtidens%20by%20Thera!5e0!3m2!1sno!2sno!4v1695191140900!5m2!1sno!2sno"
];

//  displays only the selected destination
function selectDestination(dest){ //1, 2, 3, 4
    document.querySelector("iframe").src = destinations[dest - 1];
}