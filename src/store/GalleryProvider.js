import GalleryContext from "./gallery-context";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import img1 from "../assets/404-mobile-Ui.png";
import img2 from "../assets/Header-Derna-Promotional.png";
import img3 from "../assets/Journal-Sofa-Promotional.png";
import img4 from "../assets/alireza-card-logo.png";
import img5 from "../assets/arad-Mobile-ui.png";
import img6 from "../assets/arad-desktop-Ui.png";
import img7 from "../assets/catalog-curtain-Promotional.png";
import img8 from "../assets/farhsdsadeghi-ticket-logo.png";
import img9 from "../assets/gologoldon-instagrampost-Promotional.png";
import img10 from "../assets/kasra-Laptop-UI.png";
import img11 from "../assets/kasra-Tablet-UI.png";
import img12 from "../assets/kavir-desktop-Ui.png";
import img13 from "../assets/lozhal-Pinbackbutton-logo.png";
import img14 from "../assets/lozhal-cream-logo.png";
import img15 from "../assets/minimal-book-Promotional.png";
import img16 from "../assets/najvan-envelope-logo.png";
import img17 from "../assets/nankhan-bag-logo.png";
import img18 from "../assets/nankhan-box-Promotional.png";
import img19 from "../assets/nankhan-businesscard-Promotional.png";
import img20 from "../assets/rimas-desktopapp-Ui.png";
import img21 from "../assets/rimas-tablet-Ui.png";
import img22 from "../assets/saro-invitationcard-logo.png";
import img23 from "../assets/the lord of coffee-calendar-Promotional.png";
import img24 from "../assets/thelordofring-mag-logo.png";

function GalleryProvider(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const sortQueryType = queryParams.get("sort");
  console.log(sortQueryType);

  let sortQuery = "all";
  const setSortQuery = (q) => {
    sortQuery = q;
  };

  const changeSortHandler = () => {
    navigate(`/gallery?sort=${sortQuery}`);
  };

  const desc =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.";
  const DUMMY_SAMPLES = [
    {
      name: "صفحه 404",
      description: desc,
      id: "1",
      img: img1,
      type: "ui",
      hash: "L9M%__WA~m%N%NRkNFxs^~t8IJIU",
    },
    {
      name: "کاتالوگ مجموعه درنا",
      description: desc,
      id: "2",
      img: img2,
      type: "motion",
      hash: "LDOy|qTdL4rDx@R4W@Te1jicz.X.",
    },
    {
      name: "کاتالوگ مبل",
      description: desc,
      id: "3",
      img: img3,
      type: "motion",
      hash: "LCMj?nNG~q-:?Ht7M|M__3t7D%NG",
    },
    {
      name: "لوگو علیرضا",
      description: desc,
      id: "4",
      img: img4,
      type: "web",
      hash: "LDOy|qTdL4rDx@R4W@Te1jicz.X.",
    },
    {
      name: "رابط کاربری آراد",
      description: desc,
      id: "5",
      img: img5,
      type: "ui",
      hash: "LhKBRJWBxuofRjj[oefQ~pofRjay",
    },
    {
      name: "رابط کاربری آراد",
      description: desc,
      id: "6",
      img: img6,
      type: "ui",
      hash: "LTLXVyj[~qayofWBWBof-;WBIUt7",
    },
    {
      name: "کاتالوگ پارچه شبنم",
      description: desc,
      id: "7",
      img: img7,
      type: "motion",
      hash: "L9NdK|?b.9D%?bxZNGRl%jMxD$%M",
    },
    {
      name: "لوگو فرش صادقی",
      description: desc,
      id: "8",
      img: img8,
      type: "web",
      hash: "L7OM:B?^48D45QDi=e.SCkni*yO?",
    },
    {
      name: "کاتالوگ گل و گلدون",
      description: desc,
      id: "9",
      img: img9,
      type: "motion",
      hash: "L9M@lzIT-=?I_4%MITIoxcjcNEWT",
    },
    {
      name: "رابط کاربری کسرا",
      description: desc,
      id: "10",
      img: img10,
      type: "ui",
      hash: "L2NdL0~qP70J~qj[D%a~5OE1~E=}",
    },
    {
      name: "رابط کاربری کسرا",
      description: desc,
      id: "11",
      img: img11,
      type: "ui",
      hash: "LNL;meV[~qtRt7jakBkC?bj[D%j[",
    },
    {
      name: "رابط کاربری کویر",
      description: desc,
      id: "12",
      img: img12,
      type: "ui",
      hash: "LTMQhh-5ShOZaJs,azWr?wEQnhw[",
    },
    {
      name: "لوگو لوژال",
      description: desc,
      id: "13",
      img: img13,
      type: "web",
      hash: "LIMHV;aj^-t0bDa#ogoI^mk8D~aj",
    },
    {
      name: "کرم دست لوژال",
      description: desc,
      id: "14",
      img: img14,
      type: "web",
      hash: "L6O46pM{00?b~qj[9FWB00xa_3IU",
    },
    {
      name: "کاتالوگ اصول مینیمالیسم",
      description: desc,
      id: "15",
      img: img15,
      type: "motion",
      hash: "L6O46pM{00?b~qj[9FWB00xa_3IU",
    },
    {
      name: "لوگو نجوان",
      description: desc,
      id: "16",
      img: img16,
      type: "web",
      hash: "L5O40Z_30L4T%MM{WB-;01Di^+_4",
    },
    {
      name: "پاکت نان خان",
      description: desc,
      id: "17",
      img: img17,
      type: "motion",
      hash: "LNM%$TWB.Tt7xvogadRj%iaeMdkC",
    },
    {
      name: "جعبه نان خان",
      description: desc,
      id: "18",
      img: img18,
      type: "motion",
      hash: "LENAhw%MyZE1?HRjIoxapeRjrVxa",
    },
    {
      name: "لوگو نان خان",
      description: desc,
      id: "19",
      img: img19,
      type: "web",
      hash: "L8NmsLVsPX%gxvkXocVrT}x]vyMw",
    },
    {
      name: "رابط کاربری ریماس",
      description: desc,
      id: "20",
      img: img20,
      type: "ui",
      hash: "L3NdO8M{xr_N?bt7RiofD$of-;IU",
    },
    {
      name: "رابط کاربری ریماس",
      description: desc,
      id: "21",
      img: img21,
      type: "ui",
      hash: "L8NdL0%MELs.~qWBD%WBNHM{?Goz",
    },
    {
      name: "لوگو سارو",
      description: desc,
      id: "22",
      img: img22,
      type: "web",
      hash: "LAN,_DD%Io~qMxay%Mj[M|-;oJ9F",
    },
    {
      name: "تقویم ارباب قهوه ها",
      description: desc,
      id: "23",
      img: img23,
      type: "motion",
      hash: "L9NdE,_NAUDO_3M{M|ozK$Dj^QyW",
    },
    {
      name: "لوگو ارباب قهوه ها",
      description: desc,
      id: "24",
      img: img24,
      type: "web",
      hash: "L3NwWd~p00M{D%M{?bt79GD%_3xu",
    },
  ];

  const [visiblity, setVisibility] = useState(false);
  const showPreview = () => {
    setVisibility(true);
  };
  const hidePreview = () => {
    setVisibility(false);
  };

  const [id, setId] = useState("");

  const galleryCtxValue = {
    samples: DUMMY_SAMPLES,
    visiblity: visiblity,
    showPreview: showPreview,
    hidePreview: hidePreview,
    id: id,
    setId: setId,
    setSortQuery: setSortQuery,
    sort: changeSortHandler,
    sortQueryType: sortQueryType,
  };

  return (
    <GalleryContext.Provider value={galleryCtxValue}>
      {props.children}
    </GalleryContext.Provider>
  );
}

export default GalleryProvider;
