

<div >

    {/* Form đăng ký + đăng nhập  */}
    <div class="Login container" id="container">
        <div class="form-container sign-up-container">
            <img src="https://www.hoangquanland.com/packs/media/images/logo_3-c57af9c7fb5b4d5fa7a36b26abc8b25d.jpg" alt="" />
            <form action="#">
                <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
                <span>or use your email for registration</span>
                <input class="gate" type="text" placeholder="Nhập họ và tên" /><label for="element" className='name'> <i class="far fa-user"></i></label>
                <input class="gate" type="text" placeholder="Nhập Số điện thoại" /><label for="element" className='name1'> <i class="fas fa-phone-square-alt"></i> </label>
                <input class="gate" type="text" placeholder="Nhập SMS OPT" /><label for="element" className='name2'> <i class="fas fa-sms"></i> </label>
                <button className='margin-top-20'>Đăng ký</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <img src="https://www.hoangquanland.com/packs/media/images/logo_3-c57af9c7fb5b4d5fa7a36b26abc8b25d.jpg" alt="" />
            <form action="#">

                <h1>ĐĂNG NHẬP</h1>
                <span>or use your account</span>
                <input class="gate" type="text" placeholder="Nhập số điện thoại" /><label for="element" className='name3'> <i class="fas fa-phone-square-alt"></i> </label>
                <input class="gate margin-top-20" type="text" placeholder="Nhập mã đăng nhập" /><label for="element" className='name4'><i class="fas fa-key"></i> </label>
                <button className='margin-top-20'>Đăng nhập</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Chào mừng trở lại!</h1>
                    <p>Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
                    <button class="ghost margin-top-20" id="signIn">Đăng nhập</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Xin chào, Quý khách đã đăng ký tài khoản ?</h1>
                    <p>Nhập thông tin cá nhân của bạn đăng ký tài khoản để nhận thông tin và bắt đầu hành trình với chúng tôi!</p>
                    <button class="ghost margin-top-20" id="signUp">Đăng Ký</button>
                </div>
            </div>
        </div>
    </div>
    {/*End  Form đăng ký + đăng nhập  */}



    {/* HEADER  */}
    <div className='Header  '>
        <div class="hero-anime">
            <div class="navigation-wrap bg-light start-header start-style">
                <div class="">
                    <div class="row">
                        <div class="col-12">
                            <nav class="navbar navbar-expand-md">
                                <a class="navbar-brand" href="https://front.codes/" target="_blank">
                                    <img src="https://www.hoangquanland.com/packs/media/images/logo_3-c57af9c7fb5b4d5fa7a36b26abc8b25d.jpg" alt="" /></a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">


                                    <span class="navbar-toggler-icon width100"><i class="far fa-newspaper"></i> <sup>2</sup></span>
                                    <span class="navbar-toggler-icon"><i class="fas fa-align-right"></i></span>
                                </button>
                                <div class="collapse navbar-collapse bor-top-xs" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto py-md-0">

                                        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 margin-top-15s-xs">
                                            <a class="nav-link" href="#">Giới thiệu</a>
                                        </li>
                                        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tư vấn viên <i class="fas fa-caret-down"></i></a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">
                                                    <img src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" className='avartarOf' alt="" />
                                                    <span className='CustomerName'>Nhân viên 1 </span>
                                                </a>
                                                <a class="dropdown-item" href="#">
                                                    <img src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" className='avartarOf' alt="" />
                                                    <span className='CustomerName'> Nhân viên 1 </span>
                                                </a>
                                                <a class="dropdown-item" href="#">
                                                    <img src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" className='avartarOf' alt="" />
                                                    <span className='CustomerName'> Nhân viên 1 </span>
                                                </a>
                                                <a class="dropdown-item" href="#">
                                                    <img src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" className='avartarOf' alt="" />
                                                    <span className='CustomerName'> Nhân viên 1</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Biệt thự,Liền kề <i class="fas fa-angle-down"></i></a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Dịch Vụ Kim Chung</a>
                                                <a class="dropdown-item" href="#">Đấu Giá Lai Xá</a>
                                                <a class="dropdown-item" href="#">Khu đô thị Tân Tây Đô</a>
                                                <a class="dropdown-item" href="#">Dịch Vụ Trạm Trôi</a>
                                                <a class="dropdown-item" href="#">Dịch Vụ Tây Tựu</a>
                                                <a class="dropdown-item" href="#">Đấu Giá Sơn Đồng</a>
                                            </div>
                                        </li>
                                        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Phân lô đất nền <i class="fas fa-angle-down"></i></a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Phân lô đất nền</a>
                                                <a class="dropdown-item" href="#">Phân lô đất nền</a>
                                                <a class="dropdown-item" href="#">Phân lô đất nền</a>
                                                <a class="dropdown-item" href="#">Phân lô đất nền</a>
                                            </div>
                                        </li>
                                        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 customer">
                                            <a class="nav-link dropdown-toggle " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                <img src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" className='avartar' alt="" />
                                                <span className='CustomerName'> Xin chào! ABC <i class="fas fa-caret-down"></i></span>
                                            </a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#"> <i class="fas fa-sign-out-alt"></i> Đăng xuất</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* END HEADER  */}

    {/* BANNER  */}
    <div class="skw-pages infor">
        <div class="skw-page skw-page-1 active">
            <div class="skw-page__half skw-page__half--left">
                <div class="skw-page__skewed">
                    <div class="skw-page__content"></div>
                </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
                <div class="skw-page__skewed">
                    <div class="skw-page__content">
                        <h2 class="skw-page__heading">Chuyên biệt thự, liền kề</h2>
                        <p class="skw-page__description">Biệt thự liền kề là một trong những loại hình biệt thự đang được nhắc đến rất nhiều ở thời điểm hiện tại và xuất hiện rất nhiều tại các khu đô thị mới. Vậy biệt thự liền kề là gì? Ưu nhược điểm ra sao? Có nên mua biệt thự liền kề hay không?
                            Hãy cùng chúng tôi tìm hiểu dưới đây nhé!</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="skw-page skw-page-2">
            <div class="skw-page__half skw-page__half--left">
                <div class="skw-page__skewed">
                    <div class="skw-page__content">
                        <h2 class="skw-page__heading">Đất nền phân lô</h2>
                        <p class="skw-page__description">Với mong muốn sở hữu một ngôi nhà gắn liền với mặt đất để có được không gian cá nhân và thoải mái, nhiều khách hàng đã lựa chọn nhận đất phân lô để xây dựng tổ ấm riêng cho mình và cả gia đình. Thấu hiểu mong muốn này của quý khách hàng, hãy cùng chúng tôi tham khảo dưới đây nhé!</p>
                    </div>
                </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
                <div class="skw-page__skewed">
                    <div class="skw-page__content"></div>
                </div>
            </div>
        </div>

    </div>
    {/* END BANNER  */}

    {/* VIDEO NỔI BẬT  */}
    <div class="video_area ">
        <div class="">
            <div class="row">

                <div class="col-md-8 wow fadeInLeftBig animated padding-left-40 padding-bottom-15" >{/* style="visibility: visible; animation-name: fadeInRightBig;" */} {/* style="padding-top: 56.25%;" */}

                    <div class="video">
                        <div class="location_mapvideo">
                        </div>

                        <div className='newtag2  blind'>MỚI
                        </div>
                        <div class="fluid-width-video-wrapper height350">
                            <iframe allowfullscreen="true" src="https://www.youtube.com/embed/5e0LxrLSzok?mute=1&amp;controls=1&amp;autoplay=1" width="100%"></iframe>
                        </div>
                        <div className='col-md-12' style={{ marginTop: '15px' }}>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className='borvideo'>
                                        <div class="location_map">
                                        </div>
                                        <div className='tagnew blind'>MỚI
                                        </div>
                                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                                            className='Play' />
                                        <img width="100%"
                                            className='imgvideo'
                                            src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" />

                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='borvideo'>
                                        <div class="location_map">
                                        </div>
                                        <div className='tagnew blind'>MỚI
                                        </div>
                                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                                            className='Play' />
                                        <img width="100%"
                                            className='imgvideo'
                                            src="https://www.hoangquanland.com/quan_realest/uploads_development/product/cover_photo/118/tiny_326d7e41-bd55-403c-9149-c62177e3f09a.jpg" />
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='borvideo'>
                                        <div class="location_map">
                                        </div>
                                        <div className='tagnew  blind'>MỚI
                                        </div>
                                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                                            className='Play' />
                                        <img width="100%"
                                            className='imgvideo'
                                            src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/7/small_7df0b8ab-e83c-420c-ac17-8e966398f5a0.JPG" />
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='borvideo'>
                                        <div class="location_map">
                                        </div>
                                        <div className='tagnew blind'>MỚI
                                        </div>
                                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                                            className='Play' />
                                        <img width="100%"
                                            className='imgvideo'
                                            src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/11/small_a4c5d161-ea26-4c20-bd83-a21c4094e355.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 wow  fadeInRightBig animated colorxs" >{/* style="visibility: visible; animation-name: fadeInLeftBig;" */}
                    <div class="video_title">
                        <h2><span style={{ color: '#a81422' }}>Dự án</span> <span className='ttvideo'>nổi bật qua video</span></h2>
                        <p className=''> <sup>"</sup> Video sẽ hỗ trợ cho quý khách có cách nhìn tổng thể và trực quan nhất về những dự án đang được quan tâm nhiều nhất tại <span style={{ color: '#a81422', fontWeight: '600' }}>HOANGQUANLAND.</span><sup>"</sup></p>
                    </div>
                    <div class="video-button">
                        <div class="wow bounceInLeft animated" >
                            <div class="social_icons">
                                <ul>
                                    <li><a href=""><i class="fas fa-phone-alt"></i></a>
                                    </li>
                                    <li><a href=""><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li><a href=""><i class="fab fa-tiktok"></i></a>
                                    </li>
                                    <li><a href=""><i class="fab fa-youtube"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* END VIDEO NỔI BẬT  */}

    {/* SẢN PHẨM NỔI BẤT */}
    <div class="dichvu top3xs">
        <div class="loading">
            <span> SẢN PHẨM NỔI BẬT</span>
        </div>
        <div className='col-md-12 margin-top-20 text-center'>
            <i class="fas fa-arrow-left next"></i>
            <i class="fas fa-arrow-right next"></i>
        </div>
        {/* END NỔI BẬT */}
        <div className='OverViewBlock ' style={{ padding: '20px' }}>

            <div className='row'>
                <div className='col-md-3 col-sm-6 col-6 margin-top30-xs'>
                    <div className='contentbody'>
                        <div>
                            <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                                className='play' />
                            <img width="100%"

                                src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" className='fiximgsv' />
                        </div>
                        <div class="button-container-1">
                            <span class="mas"> <i class="far fa-paper-plane"></i> HƯỚNG ĐÔNG NAM </span>
                            <button id='work' type="button" name="Hover"> <i class="far fa-paper-plane"></i> HƯỚNG ĐÔNG NAM</button>
                        </div>
                        <div className='row Orther2' >
                            <span className='col-2  text-center iconprice'
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn2 '>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="far fa-eye"></i>  28
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="fas fa-store-alt"></i> Đã bán 0</div>

                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-6 margin-top30-xs'>
                    <div className='contentbody'>
                        <div>

                            <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                                className='play' />
                            <img width="100%"

                                src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/2/small_0775ea9d-3e03-4989-bd81-5afa48ac059b.jpg" className='fiximgsv' />
                        </div>
                        <div class="button-container-1">
                            <span class="mas"> <i class="far fa-paper-plane"></i> HƯỚNG ĐÔNG NAM </span>
                            <button id='work' type="button" name="Hover"> <i class="far fa-paper-plane"></i> HƯỚNG ĐÔNG NAM</button>
                        </div>
                        <div className='row Orther2' >
                            <span className='col-2  text-center iconprice'
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn2 '>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="far fa-eye"></i>  28
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="fas fa-store-alt"></i> Đã bán 0</div>

                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-6 margin-top30-xs'>
                    <div className='contentbody'>
                        <div>

                            <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                                className='play' />
                            <img width="100%"

                                src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" className='fiximgsv' />
                        </div>
                        <div class="button-container-1">
                            <span class="mas"> <i class="far fa-paper-plane"></i> HƯỚNG ĐÔNG NAM </span>
                            <button id='work' type="button" name="Hover"> <i class="far fa-paper-plane"></i> HƯỚNG ĐÔNG NAM</button>
                        </div>
                        <div className='row Orther2' >
                            <span className='col-2  text-center iconprice'
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn2 '>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="far fa-eye"></i>  28
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="fas fa-store-alt"></i> Đã bán 0</div>

                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-6 margin-top30-xs'>
                    <div className='contentbody'>
                        <div>
                            <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                                className='play' />
                            <img width="100%"

                                src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" className='fiximgsv' />
                        </div>
                        <div class="button-container-1">
                            <span class="mas"> <i class="far fa-paper-plane"></i> HƯỚNG ĐÔNG NAM </span>
                            <button id='work' type="button" name="Hover"> <i class="far fa-paper-plane"></i> HƯỚNG ĐÔNG NAM</button>
                        </div>
                        <div className='row Orther2' >
                            <span className='col-2  text-center iconprice'
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn2 '>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="far fa-eye"></i>  28
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="fas fa-store-alt"></i> Đã bán 0</div>

                        </div>
                    </div>
                </div>
            </div>




        </div>

    </div >
    {/* END SẢN PHẨM NỔI BẤT */}


    {/* TỔNG QUAN DỰ ÁN */}
    <div class="overview " style={{ background: 'white' }}>

        <div className='col-md-12 text-center padtop3-xs'>
            <div class="">
                <span> <h1 class="our_text">TỔNG QUAN <span style={{ color: '#a81422' }}>DỰ ÁN</span></h1></span>
                <span className='tileabout'><span style={{ color: '#a81422' }}>HOÀNG QUÂN LAND</span> luôn vững vàng với mục tiêu mang lại cho khách hàng những sản phẩm bất động sản tốt nhất bằng dịch vụ chuyên nghiệp nhất.</span>
            </div>
            {/*   <span className='tileabout'><span style={{ color: '#a81422' }}>HOÀNG QUÂN LAND</span> luôn vững vàng với mục tiêu mang lại cho khách hàng những sản phẩm bất động sản tốt nhất bằng dịch vụ chuyên nghiệp nhất.</span> */}
        </div>

        {/*popup modal */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className='video'>

                            <div class="cardDetail">
                                <div class="video-container"><iframe allowfullscreen="true" src="https://www.youtube.com/embed/5e0LxrLSzok?mute=1&amp;controls=1&amp;autoplay=1" width="100%" allowfullscreen='allowfullscreen'></iframe></div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='row Ortherover' >
                                            <span className='col-2  text-center padding-5-xs'
                                                style={{ border: '1px solid #ddd' }}
                                            ><i class="fab fa-accusoft"></i></span>
                                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> 65.0 ~ 120.0m</span>
                                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                                            <span className='col-10 padding-5-xs font14-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                                        </div>
                                        <div className='row'>
                                            <div className=' button-container-1'>
                                                <span class="mas"> <i class="fab fa-accusoft"></i> DỊCH VỤ KIM CHUNG </span>
                                                <button id='work' type="button" name="Hover"> <i class="fab fa-accusoft"></i> DỊCH VỤ KIM CHUNG</button>
                                            </div>
                                        </div>
                                        <div className='row description'>
                                            <div className='col-3'> <p>Diện tích :  </p></div>
                                            <div className='col-3'> <p>0  </p></div>
                                            <div className='col-3'> <p> Hướng : </p></div>
                                            <div className='col-3'> <p>0  </p></div>
                                            <div className='col-3'> <p>Giá : </p></div>
                                            <div className='col-3'> <p>0  </p></div>
                                            <div className='col-3'> <p>Mặt tiền:  </p></div>
                                            <div className='col-3'> <p>0  </p></div>
                                        </div>
                                    </div>

                                    <div className='col-6'>
                                        <div class="description">
                                            <p>
                                                Yếu tố đầu tư :
                                            </p>
                                            <p>
                                                ⁃ Gồm 4 toà nhà ở xã hội với cư dân 5 nghìn người
                                            </p>
                                            <p>
                                                ⁃ Giáp đường 3.5

                                            </p>
                                            <p>
                                                ⁃ Cách trung tâm 6,5 km
                                            </p>
                                            <p>
                                                ⁃ Mặt sau trường Đại học Thành Đô
                                            </p>
                                            <p>
                                                ⁃ Cách Đại học công nghiệp 1500m
                                            </p>

                                        </div></div>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>






        <div className='OverViewBlock row' style={{ padding: '0px 20px 30px 20px', background: '#f8f9fa' }}>
            <div className='col-md-6 col-sm-6 col-xs-12 margin-top30 BlockLeft'>
                <div className='contentbody row' style={{ background: 'white', boxShadow: '2px 2px 7px #001f3f' }}>
                    <div className='col-md-6 col-sm-6 col-6'>
                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                            data-toggle="modal" data-target="#exampleModal"
                            className='play2' />
                        <img width="100%"

                            src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" className='fiximgsvLeft' />
                    </div>
                    <div class="col-md-6 col-sm-6 col-6" style={{ borderLeft: '1px dashed #a81422' }}>
                        <div className=' button-container-1'>
                            <span class="mas"> <i class="fab fa-accusoft"></i> DỊCH VỤ KIM CHUNG </span>
                            <button id='work' type="button" name="Hover"> <i class="fab fa-accusoft"></i> DỊCH VỤ KIM CHUNG</button>
                        </div>
                        <div className='row Orther' >
                            <span className='col-2  text-center padding-5-xs'
                                style={{ border: '1px solid #ddd' }}
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs font14-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn'>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6', borderLeft: '1px dashed #dee2e6' }}>
                                <i class="far fa-eye"></i>  24
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="fas fa-store-alt"></i> Đã bán 0</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-sm-6 col-xs-12 margin-top30 padding-left-40-xs BlockRight '>
                <div className='contentbody row' style={{ background: 'white', boxShadow: '2px 2px 7px #001f3f' }}>
                    <div className='col-md-6 col-sm-6 col-6'>
                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                            className='play2' />
                        <img width="100%"

                            src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/2/small_0775ea9d-3e03-4989-bd81-5afa48ac059b.jpg" className='fiximgsvLeft' />
                    </div>
                    <div class="col-md-6 col-sm-6 col-6" style={{ borderLeft: '1px dashed #a81422' }}>
                        <div className=' button-container-1'>
                            <span class="mas"> <i class="fab fa-accusoft"></i> ĐÔ THỊ TÂN TÂY ĐÔ </span>
                            <button id='work' type="button" name="Hover"> <i class="fab fa-accusoft"></i> ĐÔ THỊ TÂN TÂY ĐÔ</button>
                        </div>
                        <div className='row Orther' >
                            <span className='col-2  text-center padding-5-xs'
                                style={{ border: '1px solid #ddd' }}
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs font14-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn ' >
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6', borderLeft: '1px dashed #dee2e6' }}>
                                <i class="far fa-eye"></i>  18
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="fas fa-store-alt"></i> Đã bán 0
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-sm-6 col-xs-12 margin-top30 BlockLeft'>
                <div className='contentbody row' style={{ background: 'white', boxShadow: '2px 2px 7px #001f3f' }}>
                    <div class="col-md-6 col-sm-6 col-6" >
                        <div className=' button-container-1'>
                            <span class="mas"> <i class="fab fa-accusoft"></i>DỊCH VỤ TÂY TỰU</span>
                            <button id='work' type="button" name="Hover"> <i class="fab fa-accusoft"></i> DỊCH VỤ TÂY TỰU</button>
                        </div>

                        <div className='row Orther' >

                            <span className='col-2  text-center padding-5-xs'
                                style={{ border: '1px solid #ddd' }}
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10  padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd', padding: '5px' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs font14-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn '>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="far fa-eye"></i>  28
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="fas fa-store-alt"></i> Đã bán 0
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-6' style={{ borderLeft: '1px dashed #a81422' }}>

                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                            className='play2' />
                        <img width="100%"

                            src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/7/small_7df0b8ab-e83c-420c-ac17-8e966398f5a0.JPG" className='fiximgsvRight' />
                    </div>


                </div>
            </div>
            <div className='col-md-6 col-sm-6 col-xs-12 margin-top30 padding-left-40-xs BlockRight'>
                <div className='contentbody row' style={{ background: 'white', boxShadow: '2px 2px 7px #001f3f' }}>
                    <div class="col-md-6 col-sm-6 col-6">
                        <div className=' button-container-1'>
                            <span class="mas"> <i class="fab fa-accusoft"></i> ĐẤU GIÁ SƠN ĐỒNG </span>
                            <button id='work' type="button" name="Hover"> <i class="fab fa-accusoft"></i> ĐẤU GIÁ SƠN ĐỒNG</button>
                        </div>

                        <div className='row Orther' >
                            <span className='col-2  text-center padding-5-xs'
                                style={{ border: '1px solid #ddd' }}
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  padding-5-xs text-center' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2   padding-5-xs text-center' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs font14-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn '>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6', }}>
                                <i class="far fa-eye"></i>  21
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>

                                <i class="fas fa-store-alt"></i> Đã bán 0
                            </div>

                        </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-6' style={{ borderLeft: '1px dashed #a81422' }}>

                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                            className='play2' />
                        <img width="100%"

                            src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/4/small_81a0ec3f-0f6f-4981-9eb1-11a2cf38f5f3.jpeg" className='fiximgsvRight' />
                    </div>


                </div>
            </div>

            <div className='col-md-6 col-sm-6 col-xs-12 margin-top30 BlockLeft'>
                <div className='contentbody row' style={{ background: 'white', boxShadow: '2px 2px 7px #001f3f' }}>
                    <div className='col-md-6 col-sm-6 col-6'>
                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                            data-toggle="modal" data-target="#exampleModal"
                            className='play2' />
                        <img width="100%"

                            src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" className='fiximgsvLeft' />
                    </div>
                    <div class="col-md-6 col-sm-6 col-6" style={{ borderLeft: '1px dashed #a81422' }}>
                        <div className=' button-container-1'>
                            <span class="mas"> <i class="fab fa-accusoft"></i> DỊCH VỤ KIM CHUNG </span>
                            <button id='work' type="button" name="Hover"> <i class="fab fa-accusoft"></i> DỊCH VỤ KIM CHUNG</button>
                        </div>
                        <div className='row Orther' >
                            <span className='col-2  text-center padding-5-xs'
                                style={{ border: '1px solid #ddd' }}
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs font14-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn'>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6', borderLeft: '1px dashed #dee2e6' }}>
                                <i class="far fa-eye"></i>  24
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="fas fa-store-alt"></i> Đã bán 0</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-sm-6 col-xs-12 margin-top30 padding-left-40-xs BlockRight '>
                <div className='contentbody row' style={{ background: 'white', boxShadow: '2px 2px 7px #001f3f' }}>
                    <div className='col-md-6 col-sm-6 col-6'>
                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                            className='play2' />
                        <img width="100%"

                            src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/2/small_0775ea9d-3e03-4989-bd81-5afa48ac059b.jpg" className='fiximgsvLeft' />
                    </div>
                    <div class="col-md-6 col-sm-6 col-6" style={{ borderLeft: '1px dashed #a81422' }}>
                        <div className=' button-container-1'>
                            <span class="mas"> <i class="fab fa-accusoft"></i> ĐÔ THỊ TÂN TÂY ĐÔ </span>
                            <button id='work' type="button" name="Hover"> <i class="fab fa-accusoft"></i> ĐÔ THỊ TÂN TÂY ĐÔ</button>
                        </div>
                        <div className='row Orther' >
                            <span className='col-2  text-center padding-5-xs'
                                style={{ border: '1px solid #ddd' }}
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs font14-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn ' >
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6', borderLeft: '1px dashed #dee2e6' }}>
                                <i class="far fa-eye"></i>  18
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="fas fa-store-alt"></i> Đã bán 0
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-sm-6 col-xs-12 margin-top30 BlockLeft'>
                <div className='contentbody row' style={{ background: 'white', boxShadow: '2px 2px 7px #001f3f' }}>
                    <div class="col-md-6 col-sm-6 col-6" >
                        <div className=' button-container-1'>
                            <span class="mas"> <i class="fab fa-accusoft"></i>DỊCH VỤ TÂY TỰU</span>
                            <button id='work' type="button" name="Hover"> <i class="fab fa-accusoft"></i> DỊCH VỤ TÂY TỰU</button>
                        </div>

                        <div className='row Orther' >

                            <span className='col-2  text-center padding-5-xs'
                                style={{ border: '1px solid #ddd' }}
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10  padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd', padding: '5px' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs font14-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn '>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="far fa-eye"></i>  28
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>
                                <i class="fas fa-store-alt"></i> Đã bán 0
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-6' style={{ borderLeft: '1px dashed #a81422' }}>

                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                            className='play2' />
                        <img width="100%"

                            src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/7/small_7df0b8ab-e83c-420c-ac17-8e966398f5a0.JPG" className='fiximgsvRight' />
                    </div>


                </div>
            </div>
            <div className='col-md-6 col-sm-6 col-xs-12 margin-top30 padding-left-40-xs BlockRight'>
                <div className='contentbody row' style={{ background: 'white', boxShadow: '2px 2px 7px #001f3f' }}>
                    <div class="col-md-6 col-sm-6 col-6">
                        <div className=' button-container-1'>
                            <span class="mas"> <i class="fab fa-accusoft"></i> ĐẤU GIÁ SƠN ĐỒNG </span>
                            <button id='work' type="button" name="Hover"> <i class="fab fa-accusoft"></i> ĐẤU GIÁ SƠN ĐỒNG</button>
                        </div>

                        <div className='row Orther' >
                            <span className='col-2  text-center padding-5-xs'
                                style={{ border: '1px solid #ddd' }}
                            ><i class="fab fa-accusoft"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', color: '#a81422', fontsize: '14px' }}> 55.0tr ~ 65.0tr</span>
                            <span className='col-2  text-center padding-5-xs' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="far fa-compass"></i></span>
                            <span className='col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> 65.0 ~ 120.0m</span>
                            <span className='col-2  padding-5-xs text-center' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-building text-info"></i></span>
                            <span className='col-10 padding-5-xs col-10 padding-5-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Liền kề</span>
                            <span className='col-2   padding-5-xs text-center' style={{ borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', borderBottom: '1px solid #ddd' }}><i class="fas fa-map-marker-alt text-info"></i></span>
                            <span className='col-10 padding-5-xs font14-xs' style={{ borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}> Trạm Trôi - Hoài Đức - Hà Nội</span>
                        </div>
                        <div className='row ftbn '>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6', }}>
                                <i class="far fa-eye"></i>  21
                            </div>
                            <div className='col-6 Viewpd' style={{ borderRight: '1px dashed #dee2e6' }}>

                                <i class="fas fa-store-alt"></i> Đã bán 0
                            </div>

                        </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-6' style={{ borderLeft: '1px dashed #a81422' }}>

                        <img src="https://www.hoangquanland.com/packs/media/images/playbtn2-4e0605e6b972e6ceab69000e2633c4a2.png" width="45px" height="45px"
                            className='play2' />
                        <img width="100%"

                            src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/4/small_81a0ec3f-0f6f-4981-9eb1-11a2cf38f5f3.jpeg" className='fiximgsvRight' />
                    </div>


                </div>
            </div>

            <div class="overflow display-none">

                <div id="play-button-container">

                    <svg id="button-circle-svg" viewBox="0 0 100 100">
                        {/*   <style type="text/css">
                                    .st0 {
                                        fill: #DDDDDD;
                                    stroke:#010101;
                                    stroke-width: 0px;
    }
    
    }
                                </style> */}
                        <circle id="button-circle"
                            class="st0" cx="50" cy="50" r="50" />
                    </svg>

                    <svg id="play-triangle-svg" viewBox="0 0 100 100">
                        {/*  <style>
                                    #play-triangle {
                                        fill: black;
    }
                                    #triangle-tween-target {
                                        display: none;
    }
                                </style> */}
                        <polygon id="play-triangle" points="37,74.1 76.8,51.1 37,28.2 " />
                        <rect id="triangle-tween-target" x="47.6" y="46.7" width="16" height="9" />
                    </svg>

                    <iframe id="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/Mh4f9AYRCZY?enablejsapi=1" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                    <div class="video-text">
                        Watch Video
                    </div>
                </div>



            </div>
        </div>

    </div >
    {/* END TỔNG QUAN DỰ ÁN */}


    {/*  GIỚI THIỆU */}
    <div class="overview " style={{ background: 'white' }}>
        <div className='col-md-12 text-center padtop3-xs'>
            <div class="">
                <span> <h1 class="our_text"> <span style={{ color: '#a81422' }}>VỀ HOANGQUANLAND</span></h1></span>

            </div>
        </div>
        <div className='OverViewBlock row videonb' style={{ padding: '0px 20px 30px 20px', background: '#f8f9fa' }}>
            <div className='col-md-7 col-xs-12 margin-top30 BlockLeft'>
                <div className='contentbody row' style={{ background: 'white', boxShadow: '2px 2px 7px #001f3f' }}>
                    <iframe allowfullscreen="true" src="https://www.youtube.com/embed/2F4IFFRqTJ8?mute=1&amp;controls=1&amp;autoplay=0" width="100%"></iframe>
                </div>
            </div>
            <div className='col-md-5 col-xs-12 margin-top30 padding-left-40-xs BlockRight '>
                <div className='row'>
                    <div className='col-md-6 col-xs-6'>
                        <div class="flip borshadow">
                            <div class="front" >
                                <div class="text-shadow font-15 text-center">LỊCH SỬ HÌNH THÀNH</div>
                                <div className='text-center'><i class="far fa-building"></i></div>
                                <div>
                                    <p className='Aboutcompanytitle'>Công ty thành lập năm 2015, đã có hơn 5 năm kinh nghiệm trong ngành tư vấn, mua, bán bất động sản</p>
                                </div>

                            </div>
                            <div class="back">
                                <div class="text-shadow font-15 text-center"> Lịch sử hình thành</div>
                                <div className='text-center'><i class="far fa-building"></i></div>
                                <p>công ty gồm 3 chi nhánh
                                    và 40 chuyên viên có kinh nghiệm trên 5 năm</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-6'>
                        <div class="flip borshadow">
                            <div class="front">
                                <div class="text-shadow font-15 text-center">QUY MÔ CÔNG TY</div>
                                <div className='text-center'><i class="fas fa-users"></i></div>
                                <div>
                                    <p className='Aboutcompanytitle'>công ty gồm 3 chi nhánh
                                        và 40 chuyên viên có kinh nghiệm trên 5 năm</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="text-shadow font-15 text-center">Lịch sử hình thành</div>
                                <div className='text-center'><i class="far fa-building"></i></div>
                                <p>Công ty thành lập năm 2015, đã có hơn 5 năm kinh nghiệm trong ngành tư vấn, mua, bán bất động sản</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-6'>
                        <div class="flip borshadow">
                            <div class="front" >
                                <div class="text-shadow  font-15 text-center">LỊCH SỬ HÌNH THÀNH</div>
                                <div className='text-center'><i class="far fa-building"></i></div>
                                <div>
                                    <p className='Aboutcompanytitle'>Công ty thành lập năm 2015, đã có hơn 5 năm kinh nghiệm trong ngành tư vấn, mua, bán bất động sản</p>
                                </div>

                            </div>
                            <div class="back">
                                <div class="text-shadow font-15 text-center"> Lịch sử hình thành</div>
                                <div className='text-center'><i class="far fa-building"></i></div>
                                <p>Công ty gồm 3 chi nhánh
                                    và 40 chuyên viên có kinh nghiệm trên 5 năm</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-6'>
                        <div class="flip borshadow">
                            <div class="front">
                                <div class="text-shadow font-15 text-center">QUY MÔ CÔNG TY</div>
                                <div className='text-center'><i class="fas fa-users"></i></div>
                                <div>
                                    <p className='Aboutcompanytitle'>Công ty gồm 3 chi nhánh
                                        và 40 chuyên viên có kinh nghiệm trên 5 năm</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="text-shadow font-15 text-center">Lịch sử hình thành</div>
                                <div className='text-center'><i class="far fa-building"></i></div>
                                <p>Công ty thành lập năm 2015, đã có hơn 5 năm kinh nghiệm trong ngành tư vấn, mua, bán bất động sản</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div >
    {/* END  GIỚI THIỆU  */}


    {/* TƯ VẤN PHÁP LÝ */}

    <div class="video_area padding-bottom50">
        <div class="">
            <div class="row">
                <div class="col-md-6 wow fadeInLeftBig animated" >

                    <div class="video_title2 margin-top-20">
                        <div class="loading">
                            <span> TƯ VẤN PHÁP LÝ</span>
                        </div>
                        <p className='tvtt'>Với mong muốn hỗ trợ khách hàng hiểu rõ hơn những vấn đề pháp lý liên quan tới những dự án bên HOANGQUANLAND.</p>
                    </div>

                </div>
                <div class="col-md-6 wow fadeInRightBig animated" >
                    <div className='row'>

                        <div className='col-md-12 margin-top-30'>
                            <section class="page">
                                <div class="">
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox" class="open">
                                        <div class="lines">
                                            <div class="video-button row">
                                                <div className='col-3 padding-top-15xs'>
                                                    <img
                                                        src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" />
                                                </div>
                                                <div className='col-9'>
                                                    <a class="" role="button">
                                                        Top 5 điều nên tránh khi đầu tư BDS Hoà Lạc
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </label>


                                    <section class="content">
                                        <label for="checkbox" class="close"><span>Đóng!</span></label>

                                        <div class="logo">
                                            <div class="logo__line"></div>
                                            <div class="logo__line"></div>
                                            <div class="logo__line"></div>
                                        </div>

                                        <span>Top 5 điều nên tránh khi đầu tư BDS Hoà Lạc</span>
                                        <iframe allowfullscreen="true" src="https://www.youtube.com/embed/5e0LxrLSzok?mute=1&amp;controls=1&amp;autoplay=1" width="100%"></iframe>
                                        <p>
                                            To get one of these invites, just create the best of
                                            your shots and post them in yuor dribbble account
                                            To get one of these invites, just create the best of
                                            your shots and post them in yuor dribbble account
                                        </p>
                                    </section>


                                </div>
                            </section>
                        </div>
                        <div className='col-md-12 margin-top-30'>
                            <section class="page">
                                <div class="">
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox" class="open">
                                        <div class="lines">
                                            <div class="video-button row">
                                                <div className='col-3  padding-top-15xs'>
                                                    <img
                                                        src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" />
                                                </div>
                                                <div className='col-9'>
                                                    <a class="" role="button">Top 5 điều nên tránh khi đầu tư BDS Hoà Lạc</a>
                                                </div>

                                            </div>
                                        </div>
                                    </label>


                                    <section class="content">
                                        <label for="checkbox" class="close"><span>Đóng!</span></label>

                                        <div class="logo">
                                            <div class="logo__line"></div>
                                            <div class="logo__line"></div>
                                            <div class="logo__line"></div>
                                        </div>

                                        <span>Top 5 điều nên tránh khi đầu tư BDS Hoà Lạc</span>
                                        <iframe allowfullscreen="true" src="https://www.youtube.com/embed/5e0LxrLSzok?mute=1&amp;controls=1&amp;autoplay=1" width="100%"></iframe>
                                        <p>
                                            To get one of these invites, just create the best of
                                            your shots and post them in yuor dribbble account
                                            To get one of these invites, just create the best of
                                            your shots and post them in yuor dribbble account
                                        </p>
                                    </section>


                                </div>
                            </section>
                        </div>
                        <div className='col-md-12 margin-top-30'>
                            <section class="page">
                                <div class="">
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox" class="open">
                                        <div class="lines">
                                            <div class="video-button row">
                                                <div className='col-3  padding-top-15xs'>
                                                    <img
                                                        src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" />
                                                </div>
                                                <div className='col-9'>
                                                    <a class="" role="button">Top 5 điều nên tránh khi đầu tư BDS Hoà Lạc</a>
                                                </div>

                                            </div>
                                        </div>
                                    </label>


                                    <section class="content">
                                        <label for="checkbox" class="close"><span>Đóng!</span></label>

                                        <div class="logo">
                                            <div class="logo__line"></div>
                                            <div class="logo__line"></div>
                                            <div class="logo__line"></div>
                                        </div>

                                        <span>Top 5 điều nên tránh khi đầu tư BDS Hoà Lạc</span>
                                        <iframe allowfullscreen="true" src="https://www.youtube.com/embed/5e0LxrLSzok?mute=1&amp;controls=1&amp;autoplay=1" width="100%"></iframe>
                                        <p>
                                            To get one of these invites, just create the best of
                                            your shots and post them in yuor dribbble account
                                            To get one of these invites, just create the best of
                                            your shots and post them in yuor dribbble account
                                        </p>
                                    </section>


                                </div>
                            </section>
                        </div>
                        <div className='col-md-12 margin-top-30'>
                            <section class="page">
                                <div class="">
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox" class="open">
                                        <div class="lines">
                                            <div class="video-button row">
                                                <div className='col-3  padding-top-15xs'>
                                                    <img
                                                        src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" />
                                                </div>
                                                <div className='col-9'>
                                                    <a class="" role="button">Top 5 điều nên tránh khi đầu tư BDS Hoà Lạc</a>
                                                </div>

                                            </div>
                                        </div>
                                    </label>


                                    <section class="content">
                                        <label for="checkbox" class="close"><span>Đóng!</span></label>

                                        <div class="logo">
                                            <div class="logo__line"></div>
                                            <div class="logo__line"></div>
                                            <div class="logo__line"></div>
                                        </div>

                                        <span>Top 5 điều nên tránh khi đầu tư BDS Hoà Lạc</span>
                                        <iframe allowfullscreen="true" src="https://www.youtube.com/embed/5e0LxrLSzok?mute=1&amp;controls=1&amp;autoplay=1" width="100%"></iframe>
                                        <p>
                                            To get one of these invites, just create the best of
                                            your shots and post them in yuor dribbble account
                                            To get one of these invites, just create the best of
                                            your shots and post them in yuor dribbble account
                                        </p>
                                    </section>


                                </div>
                            </section>
                        </div>
                        <div className='col-md-12 margin-top-30'>
                            <section class="page">
                                <div class="">
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox" class="open">
                                        <div class="lines">
                                            <div class="video-button row">
                                                <div className='col-3  padding-top-15xs'>
                                                    <img
                                                        src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" />
                                                </div>
                                                <div className='col-9'>
                                                    <a class="" role="button">Top 5 điều nên tránh khi đầu tư BDS Hoà Lạc</a>
                                                </div>

                                            </div>
                                        </div>
                                    </label>


                                    <section class="content">
                                        <label for="checkbox" class="close"><span>Đóng!</span></label>

                                        <div class="logo">
                                            <div class="logo__line"></div>
                                            <div class="logo__line"></div>
                                            <div class="logo__line"></div>
                                        </div>

                                        <span>Top 5 điều nên tránh khi đầu tư BDS Hoà Lạc</span>
                                        <iframe allowfullscreen="true" src="https://www.youtube.com/embed/5e0LxrLSzok?mute=1&amp;controls=1&amp;autoplay=1" width="100%"></iframe>
                                        <p>
                                            To get one of these invites, just create the best of
                                            your shots and post them in yuor dribbble account
                                            To get one of these invites, just create the best of
                                            your shots and post them in yuor dribbble account
                                        </p>
                                    </section>


                                </div>
                            </section>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
    {/*  END TƯ VẤN PHÁP LÝ */}

    {/* FOOTER */}
    <div class="Footerbottom">

        <footer>

            <div class="footer-bottom">
                <div class="">
                    <div class="row">
                        <div class="col-md-4 col-xs-12 ftpj">
                            <h5 class="footer-title">Các dự án</h5>
                            <div className='col-md-12' style={{ marginTop: '15px', marginBottom: '10px' }}>
                                <div className='row margin-botom-10'>
                                    <div className='col-4'>
                                        <div className='borvideo'>
                                            <div class="location_mapvideo">
                                            </div>

                                            <div className='newtag2  blind'>MỚI
                                            </div>
                                            <img
                                                src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" />
                                            <div className='titleftproj'>Dịch Vụ Lai Xá</div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='borvideo'>
                                            <img
                                                src="https://www.hoangquanland.com/quan_realest/uploads_development/product/cover_photo/118/tiny_326d7e41-bd55-403c-9149-c62177e3f09a.jpg" />
                                            <div className='titleftproj'>Dịch Vụ Kim Chung</div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='borvideo'>

                                            <img
                                                src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/7/small_7df0b8ab-e83c-420c-ac17-8e966398f5a0.JPG" />
                                            <div className='titleftproj'>Đấu Giá Lai Xá</div>
                                        </div>
                                    </div>

                                </div>
                                <div className='row margin-botom-10'>
                                    <div className='col-4'>
                                        <div className='borvideo'>
                                            <img
                                                src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" />
                                            <div className='titleftproj'>Dịch Vụ Lai Xá</div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='borvideo'>
                                            <img
                                                src="https://www.hoangquanland.com/quan_realest/uploads_development/product/cover_photo/118/tiny_326d7e41-bd55-403c-9149-c62177e3f09a.jpg" />
                                            <div className='titleftproj'>Dịch Vụ Kim Chung</div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='borvideo'>
                                            <div class="location_mapvideo">
                                            </div>

                                            <div className='newtag2  blind'>MỚI
                                            </div>
                                            <img
                                                src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/7/small_7df0b8ab-e83c-420c-ac17-8e966398f5a0.JPG" />
                                            <div className='titleftproj'>Đấu Giá Lai Xá</div>
                                        </div>
                                    </div>

                                </div>
                                <div className='row margin-botom-10'>
                                    <div className='col-4'>
                                        <div className='borvideo'>
                                            <img
                                                src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" />
                                            <div className='titleftproj'>Dịch Vụ Lai Xá</div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='borvideo'>
                                            <img
                                                src="https://www.hoangquanland.com/quan_realest/uploads_development/product/cover_photo/118/tiny_326d7e41-bd55-403c-9149-c62177e3f09a.jpg" />
                                            <div className='titleftproj'>Dịch Vụ Kim Chung</div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='borvideo'>

                                            <img
                                                src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/7/small_7df0b8ab-e83c-420c-ac17-8e966398f5a0.JPG" />
                                            <div className='titleftproj'>Đấu Giá Lai Xá</div>
                                        </div>
                                    </div>

                                </div>
                                <div className='row margin-botom-10'>
                                    <div className='col-4'>
                                        <div className='borvideo'>
                                            <img
                                                src="https://www.hoangquanland.com/packs/media/images/default-7fad56cc0166a9d2acdaec66a5a6a346.jpg" />
                                            <div className='titleftproj'>Dịch Vụ Lai Xá</div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='borvideo'>
                                            <img
                                                src="https://www.hoangquanland.com/quan_realest/uploads_development/product/cover_photo/118/tiny_326d7e41-bd55-403c-9149-c62177e3f09a.jpg" />
                                            <div className='titleftproj'>Dịch Vụ Kim Chung</div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='borvideo'>
                                            <div class="location_mapvideo">
                                            </div>

                                            <div className='newtag2  blind'>MỚI
                                            </div>
                                            <img
                                                src="https://www.hoangquanland.com/quan_realest/uploads_development/project/cover_photo/7/small_7df0b8ab-e83c-420c-ac17-8e966398f5a0.JPG" />
                                            <div className='titleftproj'>Đấu Giá Lai Xá</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12 padding-left-10 bortopftxs">
                            <h5 class="footer-title">CHI NHÁNH</h5>
                            <main>
                                <ol class="gradient-list">
                                    <li>Hà nội</li>
                                    <li>Bắc Giang</li>
                                    <li>Bắc Ninh</li>
                                    <li>Hải Phòng</li>

                                </ol>
                            </main>

                        </div>
                        <div class="col-md-4 col-xs-12 padding-left-10 ctact bortopftxs">
                            <h5 class="footer-title">Liên Hệ</h5>

                            <ul class="magnific-image row">
                                <li className='col-md-12 col-xs-12'>
                                    {/* <i class="Phone is-animating"></i> */}
                                    <div className='col-md-12' style={{ marginTop: '12px' }}> <i class="fas fa-phone-square-alt"></i> 0865659995</div>
                                </li>
                                <li className='col-md-12 col-xs-12'>
                                    <div className='col-md-12' style={{ marginTop: '12px' }}> <i class="far fa-envelope"></i> hoangquanland95@gmail.com</div>
                                </li>
                                <li className='col-md-12 col-xs-12'>
                                    <div className='col-md-12' style={{ marginTop: '12px' }}> <i class="fas fa-map-marked-alt"></i> Số 32 - Yên Bệ - Kim Chung - Hoài Đức - Hà Nội</div>
                                </li>
                            </ul>


                            <div class="widget widget_gallery gallery-grid-4 margin-top-50 bortopftxs">
                                <h5 class="footer-title">FANPAGE CỦA HOANGQUANLAND</h5>

                                <div class="fb-page mt-3 fb_iframe_widget margin-top-20 fanpage"
                                    data-hide-cover="false" data-href="https://www.facebook.com/hoangquanbatdongsan" data-show-facepile="false" data-turbolinks-permanent="" data-turoblinks-nocache="" data-width="200" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=889583184482960&amp;container_width=285&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fhoangquanbatdongsan&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=false&amp;width=200">
                                    <span >
                                        <iframe name="f2aabe3118095d8" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v9.0/plugins/page.php?app_id=889583184482960&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2f6328e54e4624%26domain%3Dwww.hoangquanland.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.hoangquanland.com%252Ffd08902651274c%26relation%3Dparent.parent&amp;container_width=285&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fhoangquanbatdongsan&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=false&amp;width=200" class=""></iframe></span>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div class="row bortopft">

                        <div class="col-md-6 col-xs-12 padding-top-30 text-centerxs">
                            <nav id="footer-navigation" class="site-navigation footer-navigation centered-box" role="navigation">
                                <ul id="footer-menu" class="nav-menu styled clearfix inline-inside">
                                    <li id="menu-item-26" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"><a href="#">Hỗ trợ</a></li>
                                    <li id="menu-item-27" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a href="#">Báo Giá</a></li>
                                    <li id="menu-item-28" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="#">Liên hệ</a></li>

                                </ul>
                            </nav>
                        </div>

                        <div class="col-md-6 col-xs-12">
                            <div class="social-links">
                                <a class="social-btn" title="0865659995">
                                    <i class="fas fa-mobile-alt"></i>
                                </a>
                                <a class="social-btn" title="HOANGQUANLAND">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="social-btn" title="HOANGQUANLAND">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a class="social-btn" title="HOANGQUANLAND">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <a class="social-btn" title="HOANGQUANLAND">
                                    <i class="fab fa-tiktok"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    </div>
    {/* END FOOTER */}

</div>


























