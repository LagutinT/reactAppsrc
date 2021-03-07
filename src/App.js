import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography, Paper, Grid, Link, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  jss1: {
    display: "flex",
    position: "relative",
    boxShadow: "none",
    minHeight: "100vh",
    overflowX: "hidden",
    flexDirection: "column",
  },
  jss2: {
    position: "relative",
    flexGrow: 1,
    marginBottom: "32px",
  },
  mainContainer: {
    position: "relative",
    marginBottom: "32px",
  },
  mainTitle: {
    paddingTop: "64px",
  },
  titleText: {
    fontSize: "2.375rem",
    textAlign: "left",
    fontWeight: 600,
    marginBottom: "40px",
  },
  saleCardContainer: {
    padding: "0 16px 16px 16px",
    transition: ".3s",
    borderRadius: "12px",
  },
  saleCardTitle: {
    display: "block",
    transition: "3s",
    marginBottom: "16px",
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  saleCardImg: {
    width: "100%",
  },
  couponsBlock: {
    paddingTop: "60px",
  },
  couponsBlockWrapper: {
    padding: "20px 0",
  },
  couponsBlockTitle: {
    display: "block",
    fontSize: "1.5em",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontWeight: "bold",
  },
  couponsBlockBackground: {
    backgroundSize: "auto 324px",
    background: "url(/images/couponsBackground.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
  },
  couponCard: {
    cursor: "pointer",
    maxWidth: "288px",
    background: "#ffffff",
    transition: ".3s",
    borderRadius: "12px",
  },
  couponDiscount: {
    display: "flex",
    padding: "0 24px 0 28px",
    position: "relative",
    boxShadow: "0 0 0 1px #ececec",
    transition: ".3s",
    alignItems: "center",
    borderRadius: "12px 0 0 12px",
    backgroundImage: "linear-gradient(to right, #ffffff 100%, #DCF1DA 0%)",
    transitionTimingFunction: "linear",
  },
  couponDiscountText: {
    left: "-40px",
    color: "#50B848",
    width: "100px",
    position: "absolute",
    fontSize: "1.625rem !important",
    transform: "rotate(-90deg) translateY(50%)",
    textAlign: "center",
    transition: ".3s",
    fontWeight: "600 !important",
  },
  couponGap: {
    width: "20px",
    margin: "10px auto",
    padding: "10px 0",
    zIndex: 1,
    position: "relative",
    background: "#ffffff",
    transition: ".3s",
  },
  couponGapImage: {
    top: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundSize: ".1rem .5rem",
    backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjgiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0U2RTRFQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xIDF2NCIvPjwvc3ZnPg==)",
    backgroundRepeat: "repeat-y",
    backgroundPosition: "50% 0",
  },
  couponGapTopBorder: {
    width: "20px",
    height: "10px",
    overflow: "hidden",
    position: "absolute",
    transition: ".3s",
    top: "-10px",
    before: {
      width: "30px",
      height: "30px",
      content: "",
      display: "block",
      position: "absolute",
      backgroundImage: "linear-gradient(to right, #ffffff 50%, #ffffff 50%)",
      left: "-25%",
      bottom: "-5px",
    },
    after: {
      width: "20px",
      height: "20px",
      content: "",
      display: "block",
      position: "relative",
      boxShadow: "inset 0 0 0 1px #ececec",
      transition: ".3s",
      borderRadius: "20px",
      backgroundColor: "#ffffff",
      left: "-50%",
      bottom: "100%",
      transform: "translateX(50%)",
    }
  },
  couponGapBottomBorder: {
    width: "20px",
    height: "10px",
    overflow: "hidden",
    position: "absolute",
    transition: ".3s",
    bottom: "-10px",
    before: {
      width: "30px",
      height: "30px",
      content: "",
      display: "block",
      position: "absolute",
      backgroundImage: "linear-gradient(to right, #ffffff 50%, #ffffff 50%)",
      left: "-25%",
      bottom: "-15px",
    },
    after: {
      width: "20px",
      height: "20px",
      content: "",
      display: "block",
      position: "relative",
      boxShadow: "inset 0 0 0 1px #ececec",
      transition: ".3s",
      borderRadius: "20px",
      backgroundColor: "#ffffff",
      left: "-50%",
      bottom: "0",
      transform: "translateX(50%)",
    }
  },
  couponOrderPrice: {
    padding: "20px 20px 20px 10px",
    boxShadow: "0 0 0 1px #ececec",
    transition: ".3s",
    borderRadius: "0 12px 12px 0",
  },
  couponOrderPriceText: {
    paddingRight: "24px",
  },
  couponOrderPriceImageWrapper: {
    width: "54px",
    border: "1px solid #DCF1DA",
    height: "54px",
    margin: "auto",
    display: "flex",
    transition: ".3s",
    borderRadius: "50%",
    justifyContent: "center",
  },
  couponOrderPriceImage: {
    color: "#DCF1DA",
    transition: ".3s",
    fill: "currentColor",
    transition: "fill 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    verticalAlign: "middle",
  },
  couponOrderPriceButton: {
    width: "100%",
    marginTop: "20px",
    transition: "all 300ms linear 0ms",
    textTransform: "none",
    height: "32px",
    padding: "0 12px",
    fontSize: "0.875rem",
    minWidth: "80px",
    boxShadow: "none",
    fontWeight: 500,
    borderRadius: "8px",
    color: "#ffffff",
    backgroundColor: "rgb(255, 212, 0)",
  },
  couponsDescription: {
    color: "rgba(36, 45, 57, 0.6)",
    marginBottom: "20px",
  },
  internationalService: {
    marginTop: "40px",
    marginBottom: "80px",
  },
  internationalServiceTitle: {
    marginBottom: "32px",
  },
  internationalServiceItem: {
    height: "240px",
    display: "block",
    padding: "16px 60px 16px 24px",
    overflow: "hidden",
    position: "relative",
    background: "#ffffff",
    boxShadow: "0 0 0 1px #dcf1da",
    transition: ".3s",
    borderRadius: "10px 50px 10px 10px",
  },
  internationalServiceItemWrappeer: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    position: "relative",
  },
  internationalServiceItemTitle: {
    height: "44px",
    display: "flex",
    alignItems: "center",
  },
  internationalServiceItemTitleText: {
    fontWeight: 600,
  },
  internationalServiceItemImageWrapper: {
    height: "100%",
    display: "flex",
    maxWidth: "136px",
    maxHeight: "88px",
    alignItems: "center",
  },
  internationalServiceItemImage: {
    width: "100%",
    verticalAlign: "middle",
  },
  internationalServiceItemBackgroundImage: {
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  internationalServiceItemBackgroundImageWrapper: {
    width: "88px",
    right: 0,
    bottom: 0,
    height: "40px",
    borderRadius: "10px 0 10px 0",
    opacity: "0",
    position: "absolute",
    background: "#DCF1DA",
    transition: ".3s",
  },
  muiTouchRipple: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "0",
    overflow: "hidden",
    position: "absolute",
    borderRadius: "inherit",
    pointerEvents: "none",
  },
  jss3: {
    width: "100%",
    position: "relative",
    marginTop: "auto",
    paddingTop: "32px",
    paddingBottom: "80px",
  },
  footerHr: {
    width: "100%",
    border: "none",
    height: "1px",
    margin: "40px 0 28px 0",
    background: "#ECEBED",
  },
  footerLinkWrapper: {
    width: "50%",
  },
  footerLink: {
    display: "block",
    fontSize: "1rem",
    marginBottom: "32px",
    color: "#242D39",
  }

}))


const saleCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const saleCardsTitle = ["В часе 70 минут!",
  "Переезжайте с «Грузовичкоф» и получайте кэшбек",
  "С НАМИ ВЫГОДНЕЕ!",
  "Фиксированный тариф",
  "Перевезем за полчаса!",
  "«Газель» + 1 или 2 грузчика",
  "Безлимитная перевозка XL",
  "Из Санкт-Петербурга в Москву!",
  "Попутный груз",
  "Счастливые часы!",
  "Скидка 30% на перевозки по выходным",
  "От магазина до дома — за 540 Р!",
  "Всё учтено",
  "Скидка молодожёнам – 15%",
  "Семейный счет"];

const saleCardImages = [ "/react-app/images/saleCard0.svg",
  "/react-app/images/saleCard1.svg",
  "/react-app/images/saleCard2.svg",
  "/react-app/images/saleCard3.svg",
  "/react-app/images/saleCard4.svg",
  "/react-app/images/saleCard5.svg",
  "/react-app/images/saleCard6.svg",
  "/react-app/images/saleCard7.svg",
  "/react-app/images/saleCard8.svg",
  "/react-app/images/saleCard9.svg",
  "/react-app/images/saleCard10.svg",
  "/react-app/images/saleCard11.svg",
  "/react-app/images/saleCard12.svg",
  "/react-app/images/saleCard13.svg",
  "/react-app/images/saleCard14.svg"];


const coupons = [0, 1, 2, 3, 4];

const couponsOrderPrice = ["при заказе от 4 000 р.",
  "при заказе от 9 000 р.",
  "при заказе от 14 000 р.",
  "при заказе от 19 000 р.",
  "при заказе от 24 000 р."];

const couponsDiscount = ["1 000 Р", "2 000 Р", "3 000 Р", "4 000 Р", "5 000 Р"];


const internationalServiceItems = [0, 1, 2];

const internationalServiceItemsName = ["ТаксовичкоФ", "ГрузовичкоФ Gigant", "ГрузовичкоФ Франшиза"];

const internationalServiceItemsDescription = ["Перевозка пассажиров с автопарком 10 000 автомобилей",
  "Качественная логистика по междугородней доставке грузов",
  "Предлагаем надежный, сильный и полностью готовый бизнес"]

const internationalServiceItemsImage = ["/react-app/images/internationalServiceItemImage0.svg", "/react-app/images/internationalServiceItemImage1.svg", "/react-app/images/internationalServiceItemImage2.svg"]


const footerLinks = [0, 1, 2, 3, 4, 5, 6];

const footerLinksText = ["О Сервисе", "Услуги", "Акции", "Автопарк", "Контакты", "Частые вопросы", "Отзывы",];


function App() {

  const classes = useStyles();

  return (
    <Paper className={classes.jss1}>
      <main className={classes.jss2}>
        <Container maxWidth="lg" className={classes.mainContainer}>
          <section className={classes.mainTitle}>
            <Typography component="h2" variant="h2" className={classes.titleText}>Акции сервиса ГрузовичкоФ</Typography>
          </section>
          <Grid container spacing={2}>
            {saleCards.map((card) => (
              <Grid item xs={12} sm={4}>
                <Grid container alignItems="center" className={classes.saleCardContainer}>
                  <Grid item xs={12}>
                    <Link underline="none" color="inherit">
                      <Typography variant="body1" className={classes.saleCardTitle}>{saleCardsTitle[card]}</Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link underline="hover" color="primary">
                      <img alt={saleCardsTitle[card]} className={classes.saleCardImg} src={saleCardImages[card]}></img>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            ))}    
          </Grid>
          <section>
            <div className={classes.couponsBlockWrapper}>
              <h2 className={classes.couponsBlockTitle}>
                <Typography component="p" variant="h3" align="center" className={classes.titleText}>Купоны</Typography>
              </h2>
              <Grid container spacing={5} justify="flex-end" className={classes.couponsBlockBackground}>
                <Grid item xs={12} md={10}>
                  <Grid container spacing={4} justify="flex-end">
                    {coupons.map((coupon) => (
                      <Grid item>
                        <Grid container className={classes.couponCard}>
                          <Grid item className={classes.couponDiscount}>
                            <Typography variant="body1" className={classes.couponDiscountText}>{couponsDiscount[coupon]}</Typography>
                          </Grid>
                          <Grid item className={classes.couponGap}>
                            <div className={classes.couponGapImage}></div>
                            <div className={classes.couponGapTopBorder}></div>
                            <div className={classes.couponGapBottomBorder}></div>
                          </Grid>
                          <Grid item className={classes.couponOrderPrice} xs="true">
                            <Grid container>
                              <Grid item xs={8}>
                                <Typography variant="body1" className={classes.couponOrderPriceText}>{couponsOrderPrice[coupon]}</Typography>
                              </Grid>
                              <Grid item xs={4}>
                                <div className={classes.couponOrderPriceImageWrapper}>
                                  <svg className={classes.couponOrderPriceImage} height="54" viewBox="0 0 54 54" width="54">
                                    <path d="M20.7391 26.5298C24.2174 26.5298 26.5478 24.0566 26.5478 20.8171C26.5478 17.5428 24.2174 15 20.7391 15C17.2957 15 15 17.5428 15 20.8171C15 24.0566 17.2957 26.5298 20.7391 26.5298ZM20.8087 38.582L35.6609 15.3483H33.3304L18.513 38.582H20.8087ZM33.2261 39C36.6696 39 39 36.5268 39 33.2874C39 30.0131 36.6696 27.4702 33.2261 27.4702C29.7826 27.4702 27.487 30.0131 27.487 33.2874C27.487 36.5268 29.7826 39 33.2261 39ZM20.7391 24.2308C18.9652 24.2308 17.6783 22.8026 17.6783 20.8171C17.6783 18.7271 18.9652 17.3338 20.7391 17.3338C22.5478 17.3338 23.8348 18.7271 23.8348 20.8171C23.8348 22.8026 22.5478 24.2308 20.7391 24.2308ZM33.2261 36.701C31.4174 36.701 30.1652 35.3077 30.1652 33.2874C30.1652 31.1974 31.4174 29.8041 33.2261 29.8041C35.0348 29.8041 36.3217 31.1974 36.3217 33.2874C36.3217 35.3077 35.0348 36.701 33.2261 36.701Z"></path>
                                  </svg>
                                </div>
                              </Grid>
                              <Grid item xs={12}>
                                <Button variant="contained" containedSecondary size="small" className={classes.couponOrderPriceButton}>
                                  <Typography>Получить купон</Typography>
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Typography component="span" variant="caption" className={classes.couponsDescription}>
                        Купоном можно воспользоваться один раз в месяц. Срок действия купона - 2 недели с момента получения. 
                        Акция не распространяется на пакетные предложения и спецтранспорт, не суммируется с другими акциями и 
                        предложениями. Действует только для физических лиц. Купон не подлежит обмену на деньги и другие эквиваленты.
                      </Typography>
                      <Typography component="span" variant="caption" className={classes.couponsDescription}>Подробности акции по телефону 604-25-23.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography component="span" variant="caption" className={classes.couponsDescription}>
                        Срок проведения акции — с 01.01.2019 г. по 31.12.2019 г. Организатор акции: ООО «Круиз», ОГРН 
                        1167847493835, юридический адрес: 192242, г Санкт-Петербург, улица Будапештская, дом 7 корпус 1 лит. А, 
                        помещение 1-Н
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </section>
          <div className={classes.internationalService}>
            <Typography className={classes.internationalServiceTitle} component="p" variant="h3" align="center">Международный сервис</Typography>
            <Grid container spacing={8}>
              {internationalServiceItems.map((item) => (
                <Grid item xs={12} md={4}>
                  <Link  component="a" underline="none" color="inherit" className={classes.internationalServiceItem} tabindex="0" role="button" aria-disabled="false">
                    <Grid container alignItems="center" justify="space-between" className={classes.internationalServiceItemWrappeer}>
                      <div className={classes.internationalServiceItemTitle}>
                        <Typography component="span" variant="h5" className={classes.internationalServiceItemTitleText}>{internationalServiceItemsName[item]}</Typography>
                      </div>
                      <Typography component="p" variant="body1" className={classes.internationalServiceItemDescription}>{internationalServiceItemsDescription[item]}</Typography>
                      <div className={classes.internationalServiceItemImageWrapper}>
                        <img className={classes.internationalServiceItemImage} src={internationalServiceItemsImage[item]}></img>
                      </div>
                    </Grid>
                    <img className={classes.internationalServiceItemBackgroundImage} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY1IiBoZWlnaHQ9IjEzOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0MS40MTcgMTIuMTk2YzIuNCAxLjU4OCA1LjUxMSAzLjY0OCA4LjU5MiAxLjg2OWEyLjM3MyAyLjM3MyAwIDAwLjg2Ni0zLjIzMiAyLjM3MyAyLjM3MyAwIDAwLTMuMjMyLS44NjZjLS41MzkuMzExLTEuODg1LS41OTItMy4xMDEtMS40MWgtLjAwMmwtLjAwNy0uMDA1YTY1LjEyIDY1LjEyIDAgMDAtLjQ5My0uMzNsLS40MDUtLjI2OGMtMi4zNjQtMS41NzQtNS4zMDktMy41MzUtOC40MDctMS43NDYtMy4yNzkgMS44OTItMi45MzkgNS43OTQtMi42NjIgOC42MzkuMTk4IDEuNTI1LjMyNSAzLjYzNy0uMjkgMy45OTItLjUzOS4zMTItMS44ODUtLjU5Mi0zLjEwMS0xLjQxaC0uMDAybC0uMDA3LS4wMDVhNTAuNDUzIDUwLjQ1MyAwIDAwLS40OTMtLjMzbC0uMjItLjE0NWMtMi40LTEuNTg5LTUuNTEyLTMuNjQ4LTguNTkyLTEuODctMy4yNzkgMS44OTMtMi45MzggNS43OTUtMi42NjIgOC42NC4xOTggMS41MjUuMzI1IDMuNjM3LS4yOSAzLjk5Mi0uNTM5LjMxMi0xLjg4NC0uNTkyLTMuMTAxLTEuNDEtLjE3LS4xMTQtLjMzOC0uMjI3LS41MDItLjMzNGwtLjIyLS4xNDZjLTIuNC0xLjU4OS01LjUxMi0zLjY0OC04LjU5Mi0xLjg3YTIuMzcyIDIuMzcyIDAgMDAtLjg2NiAzLjIzMiAyLjM3MyAyLjM3MyAwIDAwMy4yMzIuODY2Yy41MzktLjMxIDEuODg0LjU5MyAzLjEgMS40MWwuNTAyLjMzNS4yMjEuMTQ2YzIuNCAxLjU4OCA1LjUxMSAzLjY0OCA4LjU5MiAxLjg3IDMuMjc4LTEuODk0IDIuOTM4LTUuNzk1IDIuNjYxLTguNjQtLjE5Ny0xLjUyNS0uMzI0LTMuNjM4LjI5MS0zLjk5My41MzktLjMxIDEuODg0LjU5MyAzLjEgMS40MWwuNTAyLjMzNS4yMjEuMTQ2YzIuNCAxLjU4OCA1LjUxMSAzLjY0OCA4LjU5MiAxLjg3IDMuMjc4LTEuODk0IDIuOTM4LTUuNzk1IDIuNjYxLTguNjQtLjE5Ny0xLjUyNS0uMzI0LTMuNjM4LjI5LTMuOTkzLjUzOS0uMzEgMS44ODUuNTkzIDMuMTAxIDEuNDFsLjAwMi4wMDFjLjE3LjExNC4zMzguMjI3LjUuMzM0bC4yMjEuMTQ2em0tNTcuNjkgMTkzLjY3MWMuODIzLjQ4MSAxLjc3Ny40NzYgMi40OTQuMDYybDEzLjMxOC03LjY4OWMuODE5LS40NzMgMS4zLTEuMjk3IDEuMTkzLTIuMTkxLS4wMDQtLjk1NC0uNTgtMS43MTUtMS4zNDQtMi4wOTNsLTEyLjMzOC01Ljk5Yy0uNzY0LS4zNzgtMS41NTYtLjMzLTIuMjczLjA4NC0uNzE4LjQxNC0xLjA5NiAxLjE3OC0xLjIxIDEuOTI3bC0uOTggMTMuNjc5Yy4wMDQuOTU0LjQxOCAxLjY3MSAxLjE0IDIuMjExem05LjY1NS05LjUzNmwtNS42MzQgMy4yNTMuNTAyLTUuNzU0IDUuMTMyIDIuNTAxek0yMC4yODggOTIuOTIybC05LjQyNSA1LjQ0MmEyLjM3MyAyLjM3MyAwIDAxLTMuMjMyLS44NjZsLTUuNDQyLTkuNDI1YTIuMzczIDIuMzczIDAgMDEuODY2LTMuMjMyTDEyLjQ4IDc5LjRhMi4zNzMgMi4zNzMgMCAwMTMuMjMyLjg2Nmw1LjQ0MiA5LjQyNGEyLjM3MyAyLjM3MyAwIDAxLS44NjYgMy4yMzJ6bS05Ljc0Mi4xNjFsNS4zMjctMy4wNzYtMy4wNzYtNS4zMjctNS4zMjcgMy4wNzYgMy4wNzYgNS4zMjd6bTE5OS40ODggMTcuODYzYTUuMjA0IDUuMjA0IDAgMDEtMS45MDUgNy4xMSA1LjIwNCA1LjIwNCAwIDExLTUuMjA1LTkuMDE1IDUuMjA1IDUuMjA1IDAgMDE3LjExIDEuOTA1em0tMzEuNzYyIDI3LjA3OWwtNjQuMjUyIDM3LjA5Ni0uMDQ5LjAzLS4wMy4wMTgtLjA4MS4wNDQtNy42MDcgNC4zOTJhOC4yMyA4LjIzIDAgMDEtMTEuMzEyLTMuMDMxbC0xLjEyNC0xLjk0NmEyLjM3MyAyLjM3MyAwIDAxLjg2Ni0zLjIzMiAyLjM3MiAyLjM3MiAwIDAxMy4yMzIuODY2bDEuMTI0IDEuOTQ3YzEuMDA1IDEuNzQxIDMuMTA2IDIuMzA0IDQuODQ4IDEuMjk4bDUuNjM4LTMuMjU1LTI1LjA3Ny00My40MzVhMi4zNzMgMi4zNzMgMCAwMS44NjYtMy4yMzIgMi4zNzIgMi4zNzIgMCAwMTMuMjMyLjg2NmwyNS4wNzcgNDMuNDM1IDYyLjI4My0zNS45NTljMS43NDItMS4wMDUgMi4zMDQtMy4xMDYgMS4yOTktNC44NDhsLTYuNTA2LTExLjI2OWEyLjM3MyAyLjM3MyAwIDAxLjg2Ni0zLjIzMiAyLjM3NCAyLjM3NCAwIDAxMy4yMzIuODY2bDYuNTA2IDExLjI2OWE4LjIzMSA4LjIzMSAwIDAxLTMuMDMxIDExLjMxMnptLTg3LjA3OCAyNy4zMjdhMi4zNzMgMi4zNzMgMCAwMS0zLjIzMi0uODY2bC0xMS4xNzYtMTkuMzU3LTE3LjMxIDkuOTk0YTcuOTI1IDcuOTI1IDAgMDEtMTAuODI3LTIuOTAxbC0yMy43MTgtNDEuMDhhNy45MjYgNy45MjYgMCAwMTIuOS0xMC44MjdsMTkuMTk1LTExLjA4Mi4wNjUtLjAzOSAxMS4xNjctNi40NDcuMDY2LS4wMzdMNzcuNjIgNzEuNTdhNy45MjYgNy45MjYgMCAwMTEwLjgyNyAyLjlsNy45ODMgMTMuODI4IDIuMzQ1LTEuMzU0YTIuMzc1IDIuMzc1IDAgMDExLjEyNi0yLjU2NmwzLjQ4NS0yLjAxMi03LjE1NS0xMi4zOTJhNy45MjYgNy45MjYgMCAwMTIuOS0xMC44MjdMMTQ4LjkyIDMwLjRhNy45MjYgNy45MjYgMCAwMTEwLjgyNyAyLjkwMWwyMy43MTggNDEuMDgxYTcuOTI3IDcuOTI3IDAgMDEtMi45MDEgMTAuODI3bC0xNy40MTggMTAuMDU2IDUuNzM2IDkuOTM0YTIuMzczIDIuMzczIDAgMDEtLjg2NiAzLjIzMiAyLjM3NCAyLjM3NCAwIDAxLTMuMjMyLS44NjZMMTQyLjY2MyA2OS4yNWMtMS4wMDUtMS43NDEtMy4xMDYtMi4zMDQtNC44NDgtMS4yOTlsLTYuNTUxIDMuNzgzIDE5LjkzMiAzNC41MjNhMi4zNzEgMi4zNzEgMCAwMS0uODY2IDMuMjMxIDIuMzczIDIuMzczIDAgMDEtMy4yMzItLjg2NUwxMjcuMTY2IDc0LjFsLTExLjE2OSA2LjQ0OSAxMS44MzEgMjAuNDkyYzEuNDk0IDIuODI1LjU0MiA2LjM4LTIuMjI0IDcuOTc3bC0xOC4wMzEgMTAuNDFhNS44MDUgNS44MDUgMCAwMS03LjkxOC0yLjEyMmwtMTEuODMtMjAuNDkyLTIyLjAyOSAxMi43MTljLTEuNzQyIDEuMDA1LTIuMzA0IDMuMTA2LTEuMjk5IDQuODQ3bDI3LjU2MyA0Ny43NGEyLjM3MyAyLjM3MyAwIDAxLS44NjYgMy4yMzJ6bTM2LjI5Ny05Ni45MDNhMi4zNSAyLjM1IDAgMDAtMS4yODMuNzQxTDEwNy40ODQgODBsLTcuMTU1LTEyLjM5MmEzLjE4IDMuMTggMCAwMTEuMTY5LTQuMzYzbDE3LjMxMS05Ljk5NSA0LjAyMSA2Ljk2NGE1LjgwNiA1LjgwNiAwIDAwNy45MTggMi4xMjFsNS4yMjQtMy4wMTZhNS44MDYgNS44MDYgMCAwMDIuMTIyLTcuOTE4bC00LjAyMS02Ljk2NCAxNy4yMTMtOS45MzhhMy4xOCAzLjE4IDAgMDE0LjM2MyAxLjE3bDIzLjcxOCA0MS4wOGEzLjE4IDMuMTggMCAwMS0xLjE2OSA0LjM2M2wtMTcuNDE3IDEwLjA1Ni0xNC4wMi0yNC4yODNhOC4yMyA4LjIzIDAgMDAtMTEuMzEyLTMuMDNsLTcuOTU4IDQuNTk0ek02Mi42NzMgODUuNjYzbDE3LjMxMy05Ljk5NmEzLjE4IDMuMTggMCAwMTQuMzYzIDEuMTdsNy44MjYgMTMuNTU0YTIuMzczIDIuMzczIDAgMDAtMi41MTktLjA5OEw2My40MyAxMDUuNDM1YTguMjI5IDguMjI5IDAgMDAtMy4wMyAxMS4zMTFsMTQuMDIgMjQuMjg1LTE3LjMxIDkuOTk1YTMuMTggMy4xOCAwIDAxLTQuMzY0LTEuMTdsLTIzLjcxNy00MS4wOGEzLjE4IDMuMTggMCAwMTEuMTY5LTQuMzYzbDE3LjIxLTkuOTM3IDMuNTQ5IDYuMTQ2YTUuODA2IDUuODA2IDAgMDA3LjkxOCAyLjEyMWw1LjIyNS0zLjAxNmMyLjg2OC0xLjY1NiAzLjgyLTUuMjExIDIuMTIxLTcuOTE4bC0zLjU0OC02LjE0NnpNNTEuNjEgOTIuMDUxbDcuMDY5LTQuMDgxIDMuNTQ4IDYuMTQ1YTEuMDYgMS4wNiAwIDAxLS4zOSAxLjQ1NWwtNS4yMjQgMy4wMTZhMS4wNiAxLjA2IDAgMDEtMS40NTUtLjM5bC0zLjU0OC02LjE0NXptNTIuMjAzIDIyLjk5Mkw5Mi44MTEgOTUuOTg4bDE5Ljk3Ny0xMS41MzQgMTEuMDAxIDE5LjA1NWExLjA2IDEuMDYgMCAwMS0uMzg5IDEuNDU1bC0xOC4xMzMgMTAuNDY5YTEuMDYyIDEuMDYyIDAgMDEtMS40NTUtLjM5em0xOS41NjctNjMuMzQybDMuNTQ5IDYuMTQ3YTEuMDYgMS4wNiAwIDAwMS40NTQuMzlsNS4yMjUtMy4wMTdhMS4wNiAxLjA2IDAgMDAuMzg5LTEuNDU0bC0zLjU0OS02LjE0Ny03LjA2OCA0LjA4MXptLTQwLjM1NiA2OS4xOTVhMi45NTggMi45NTggMCAxMC0yLjk1OS01LjEyMyAyLjk1OCAyLjk1OCAwIDAwMi45NTkgNS4xMjN6bTczLjMwMi02LjkzNmEyLjk1NyAyLjk1NyAwIDExLTUuMTIxIDIuOTU2IDIuOTU3IDIuOTU3IDAgMDE1LjEyMS0yLjk1NnoiIGZpbGw9IiNEQ0YxREEiLz48L3N2Zz4="></img>
                    <Grid container alignItems="center" justify="center" color="primary" className={classes.internationalServiceItemBackgroundImageWrapper}>
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUuMzU0IDQuMzU0YS41LjUgMCAwMDAtLjcwOEwxMi4xNzIuNDY0YS41LjUgMCAxMC0uNzA4LjcwOEwxNC4yOTMgNGwtMi44MjkgMi44MjhhLjUuNSAwIDEwLjcwOC43MDhsMy4xODItMy4xODJ6TTAgNC41aDE1di0xSDB2MXoiIGZpbGw9IiM0MTQxNDEiLz48L3N2Zz4="></img>
                    </Grid>
                    <span className={classes.muiTouchRipple}></span>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>  
      </main>
      <footer className={classes.jss3}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justify="space-between">
            <Grid item sm={12} md={6}>
              <Grid container alignItems="center" justify="space-between">
                {footerLinks.map((link) => (
                  <Grid item className={classes.footerLink}>
                    <Link></Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </Container>
        <hr className={classes.footerHr}></hr>
        <Container maxWidth="lg"></Container>
      </footer>
    </Paper>
  );
}

export default App;
