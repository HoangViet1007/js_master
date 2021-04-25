window.asideAdmin = {
    getasideAdmin: async() => {
        var aside = "";
        aside += `
                <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <!-- Brand Logo -->
                <a href="./index3.html" class="brand-link">
                    <img src="../../public/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                    <span class="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                <!-- Sidebar -->
                <div class="sidebar">
                    <!-- Sidebar user (optional) -->
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <img src="../../public/dist/img/me.jpg" class="img-circle elevation-2" alt="User Image">
                        </div>
                        <div class="info">
                            <a href="#" class="d-block">Hoàng Quốc Bảo Việt</a>
                        </div>
                    </div>

                    <!-- SidebarSearch Form -->
                    <div class="form-inline">
                        <div class="input-group" data-widget="sidebar-search">
                            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                            <div class="input-group-append">
                                <button class="btn btn-sidebar">
                                        <i class="fas fa-search fa-fw"></i>
                                    </button>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar Menu -->
                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <!-- Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library -->
                            <li class="nav-item">
                                <a href="../dashboard/dashboard.html" class="nav-link">
                                    <i class="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                                        <span class="right badge badge-danger">New</span>
                                    </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="nav-icon fas fa-cogs"></i>
                                    <p>
                                        Manage product
                                        <i class="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <a href="../product/list-product.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>List product</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="../product/add-product.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Add product</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                            <a href="#" class="nav-link">
                            <i class="nav-icon fa fa-calendar" aria-hidden="true"></i>
                                <p>
                                    Manage categories
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="../categories/list-categories.html" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>List categories</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="../categories/add-categories.html" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Add categories</p>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                        <a href="#" class="nav-link">
                        <i class="nav-icon far fa-images"></i>
                            <p>
                                Manage slide
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="../slide/list-slide.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>List slide</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="../slide/add-slide.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Add slide</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fab fa-first-order"></i>
                        <p>
                            Manage orders
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                       
                        <li class="nav-item">
                            <a href="../orders/list-orders.html" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>List orders</p>
                            </a>
                        </li>
                    </ul>
                </li>

                        </ul>
                    </nav>
                    <!-- /.sidebar-menu -->
                </div>
                <!-- /.sidebar -->
            </aside>
        `;

        document.querySelector('#aside').innerHTML = aside;
    }
}