import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="title">
        <h1>تم بناء هذا الموقع بواسطة فراس سلوم</h1>
        <p>اتممت الدورات التالية في مجال برمجة الويب</p>
        <p>واسعى لستكمال تخصصي كمطور واجهات المستخدم(Front-end)</p>
        <p>ثم مطور تطبيقات الويب بشكل كامل (Full-stack)</p>
      </div>
      <div className="corses">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem className="ListItem">
            <ListItemText
              primary="المصدر :Elzero Web School"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="div"
                    variant="body2"
                    color="text.primary"
                  >
                    الكورس :Learn HTML In Arabic 2021
                  </Typography>
                  <p>
                    دورة في HTML من اصفر حتى معرف طريقة انشاء العناصر و التعامل
                    مع صفحة HTML بشكل كامل
                  </p>
                  <Link
                    to="https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji&pp=iAQB"
                    target="_blank"
                    className="homeLink"
                  >
                    رابط الدورة
                  </Link>
                </React.Fragment>
              }
            />
            <ListItemAvatar>
              <Avatar
                className="Avatarimg"
                alt="Remy Sharp"
                src="https://i.ytimg.com/vi/6QAELgirvjs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCUGNmXQgcfYaqEPhg4dxnjDe8uQg"
              />
            </ListItemAvatar>
          </ListItem>
          <Divider variant="inset" component="li" className="Divider"/>
          <ListItem className="ListItem">
            <ListItemText
              primary="المصدر :Elzero Web School"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Learn CSS In Arabic 2021
                  </Typography>
                  <p>
                    دورة في CSS من الصفر حتى كيفية وضع الستايل العناصر و التحكم
                    الكامل بها و انشاء المواقع الم تجاوبة مع قياسات الشاشات
                    المتعددة
                  </p>
                  <Link
                    to="https://www.youtube.com/watch?v=X1ulCwyhCVM&list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe&pp=iAQB"
                    target="_blank"
                    className="homeLink"
                  >
                    رابط الدورة
                  </Link>
                </React.Fragment>
              }
            />
            <ListItemAvatar>
              <Avatar
                className="Avatarimg"
                alt="Travis Howard"
                src="https://i.ytimg.com/vi/X1ulCwyhCVM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDoVCmbRL8ZPmfiJVenWBbxxDtjvg"
              />
            </ListItemAvatar>
          </ListItem>
          <Divider variant="inset" component="li" className="Divider"/>
          <ListItem className="ListItem">
            <ListItemText
              primary="تطبيقات عملية"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    انشاء اربعة مواقع مختلفة المستوى بواسطة HTML و CSS
                  </Typography>
                  <br />
                  <Link
                    to="https://feras-salloum.github.io/-template_1/"
                    target="_blank"
                    className="homeLink"
                  >
                    التطبيق الاول
                  </Link>
                  <br />
                  <Link
                    to="https://feras-salloum.github.io/-template_2/"
                    target="_blank"
                    className="homeLink"
                  >
                    التطبيق الثاني
                  </Link>
                  <br />
                  <Link
                    to="https://feras-salloum.github.io/-template_3/"
                    target="_blank"
                    className="homeLink"
                  >
                    التطبيق الثالث
                  </Link>
                  <br />
                  <Link
                    to="https://feras-salloum.github.io/template_4/"
                    target="_blank"
                    className="homeLink"
                  >
                    التطبيق الرابع
                  </Link>
                </React.Fragment>
              }
            />
            <ListItemAvatar>
              <Avatar
                className="Avatarimg"
                alt="Cindy Baker"
                src="https://i.ytimg.com/vi/qfPUMV9J5yw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBi8eql15uDoE_WEkFR-9eV0r7Q3g/"
              />
            </ListItemAvatar>
          </ListItem>
          <Divider variant="inset" component="li" className="Divider"/>
          <ListItem className="ListItem">
            <ListItemText
              primary="المصدر :Elzero Web School"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Learn JavaScript in Arabic 2021
                  </Typography>
                  <p>
                    دورة في JavaScript من الصفر حتى الكتابة بطريقة OOP والتعامل
                    مع العناصر في الصفحة و الزمن و ارسال البيانات و ستقبالها{" "}
                  </p>
                  <Link
                    to="https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&pp=iAQB"
                    target="_blank"
                    className="homeLink"
                  >
                    رابط الدورة
                  </Link>
                </React.Fragment>
              }
            />
            <ListItemAvatar>
              <Avatar
                className="Avatarimg"
                alt="Cindy Baker"
                src="https://i.ytimg.com/vi/GM6dQBmc-Xg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAgY_Y5feZqndyghCkBcia6Nx3aLA"
              />
            </ListItemAvatar>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Home;
