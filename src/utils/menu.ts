export const menuList = [
  {
    path: '/:path(.*)*',
    name: 'PageNotFound',
    meta: {
      title: 'ErrorPage',
      hideBreadcrumb: true,
      hideMenu: true,
    },
    children: [
      {
        path: '/:path(.*)*',
        name: 'PageNotFound',
        meta: {
          title: 'ErrorPage',
          hideBreadcrumb: true,
          hideMenu: true,
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/about/index',
    meta: {
      hideChildrenInMenu: true,
      icon: 'simple-icons:about-dot-me',
      title: 'routes.dashboard.about',
      orderNo: 100000,
    },
    children: [
      {
        path: 'index',
        name: 'AboutPage',
        meta: {
          title: 'routes.dashboard.about',
          icon: 'simple-icons:about-dot-me',
          hideMenu: true,
        },
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/analysis',
    meta: {
      orderNo: 10,
      icon: 'ion:grid-outline',
      title: 'routes.dashboard.dashboard',
    },
    children: [
      {
        path: 'analysis',
        name: 'Analysis',
        meta: {
          title: 'routes.dashboard.analysis',
        },
      },
      {
        path: 'workbench',
        name: 'Workbench',
        meta: {
          title: 'routes.dashboard.workbench',
        },
      },
    ],
  },
  {
    path: '/charts',
    name: 'Charts',
    redirect: '/charts/echarts/map',
    meta: {
      orderNo: 500,
      icon: 'ion:bar-chart-outline',
      title: 'routes.demo.charts.charts',
    },
    children: [
      {
        path: 'baiduMap',
        name: 'BaiduMap',
        meta: {
          title: 'routes.demo.charts.baiduMap',
        },
      },
      {
        path: 'aMap',
        name: 'AMap',
        meta: {
          title: 'routes.demo.charts.aMap',
        },
      },
      {
        path: 'googleMap',
        name: 'GoogleMap',
        meta: {
          title: 'routes.demo.charts.googleMap',
        },
      },
      {
        path: 'echarts',
        name: 'Echarts',
        meta: {
          title: 'Echarts',
        },
        redirect: '/charts/echarts/map',
        children: [
          {
            path: 'map',
            name: 'Map',
            meta: {
              title: 'routes.demo.charts.map',
            },
          },
          {
            path: 'line',
            name: 'Line',
            meta: {
              title: 'routes.demo.charts.line',
            },
          },
          {
            path: 'pie',
            name: 'Pie',
            meta: {
              title: 'routes.demo.charts.pie',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/comp',
    name: 'Comp',
    redirect: '/comp/basic',
    meta: {
      orderNo: 30,
      icon: 'ion:layers-outline',
      title: 'routes.demo.comp.comp',
    },
    children: [
      {
        path: 'basic',
        name: 'BasicDemo',
        meta: {
          title: 'routes.demo.comp.basic',
        },
      },
      {
        path: 'form',
        name: 'FormDemo',
        redirect: '/comp/form/basic',
        meta: {
          title: 'routes.demo.form.form',
        },
        children: [
          {
            path: 'basic',
            name: 'FormBasicDemo',
            meta: {
              title: 'routes.demo.form.basic',
            },
          },
          {
            path: 'useForm',
            name: 'UseFormDemo',
            meta: {
              title: 'routes.demo.form.useForm',
            },
          },
          {
            path: 'refForm',
            name: 'RefFormDemo',
            meta: {
              title: 'routes.demo.form.refForm',
            },
          },
          {
            path: 'advancedForm',
            name: 'AdvancedFormDemo',
            meta: {
              title: 'routes.demo.form.advancedForm',
            },
          },
          {
            path: 'ruleForm',
            name: 'RuleFormDemo',
            meta: {
              title: 'routes.demo.form.ruleForm',
            },
          },
          {
            path: 'dynamicForm',
            name: 'DynamicFormDemo',
            meta: {
              title: 'routes.demo.form.dynamicForm',
            },
          },
          {
            path: 'customerForm',
            name: 'CustomerFormDemo',
            meta: {
              title: 'routes.demo.form.customerForm',
            },
          },
          {
            path: 'appendForm',
            name: 'appendFormDemo',
            meta: {
              title: 'routes.demo.form.appendForm',
            },
          },
          {
            path: 'tabsForm',
            name: 'tabsFormDemo',
            meta: {
              title: 'routes.demo.form.tabsForm',
            },
          },
        ],
      },
      {
        path: 'table',
        name: 'TableDemo',
        redirect: '/comp/table/basic',
        meta: {
          title: 'routes.demo.table.table',
        },
        children: [
          {
            path: 'basic',
            name: 'TableBasicDemo',
            meta: {
              title: 'routes.demo.table.basic',
            },
          },
          {
            path: 'treeTable',
            name: 'TreeTableDemo',
            meta: {
              title: 'routes.demo.table.treeTable',
            },
          },
          {
            path: 'fetchTable',
            name: 'FetchTableDemo',
            meta: {
              title: 'routes.demo.table.fetchTable',
            },
          },
          {
            path: 'fixedColumn',
            name: 'FixedColumnDemo',
            meta: {
              title: 'routes.demo.table.fixedColumn',
            },
          },
          {
            path: 'customerCell',
            name: 'CustomerCellDemo',
            meta: {
              title: 'routes.demo.table.customerCell',
            },
          },
          {
            path: 'formTable',
            name: 'FormTableDemo',
            meta: {
              title: 'routes.demo.table.formTable',
            },
          },
          {
            path: 'useTable',
            name: 'UseTableDemo',
            meta: {
              title: 'routes.demo.table.useTable',
            },
          },
          {
            path: 'refTable',
            name: 'RefTableDemo',
            meta: {
              title: 'routes.demo.table.refTable',
            },
          },
          {
            path: 'multipleHeader',
            name: 'MultipleHeaderDemo',
            meta: {
              title: 'routes.demo.table.multipleHeader',
            },
          },
          {
            path: 'mergeHeader',
            name: 'MergeHeaderDemo',
            meta: {
              title: 'routes.demo.table.mergeHeader',
            },
          },
          {
            path: 'expandTable',
            name: 'ExpandTableDemo',
            meta: {
              title: 'routes.demo.table.expandTable',
            },
          },
          {
            path: 'fixedHeight',
            name: 'FixedHeightDemo',
            meta: {
              title: 'routes.demo.table.fixedHeight',
            },
          },
          {
            path: 'footerTable',
            name: 'FooterTableDemo',
            meta: {
              title: 'routes.demo.table.footerTable',
            },
          },
          {
            path: 'editCellTable',
            name: 'EditCellTableDemo',
            meta: {
              title: 'routes.demo.table.editCellTable',
            },
          },
          {
            path: 'editRowTable',
            name: 'EditRowTableDemo',
            meta: {
              title: 'routes.demo.table.editRowTable',
            },
          },
          {
            path: 'authColumn',
            name: 'AuthColumnDemo',
            meta: {
              title: 'routes.demo.table.authColumn',
            },
          },
          {
            path: 'resizeParentHeightTable',
            name: 'ResizeParentHeightTable',
            meta: {
              title: 'routes.demo.table.resizeParentHeightTable',
            },
          },
          {
            path: 'vxeTable',
            name: 'VxeTableDemo',
            meta: {
              title: 'routes.demo.table.vxeTable',
            },
          },
        ],
      },
      {
        path: 'transition',
        name: 'transitionDemo',
        meta: {
          title: 'routes.demo.comp.transition',
        },
      },
      {
        path: 'cropper',
        name: 'CropperDemo',
        meta: {
          title: 'routes.demo.comp.cropperImage',
        },
      },
      {
        path: 'timestamp',
        name: 'TimeDemo',
        meta: {
          title: 'routes.demo.comp.time',
        },
      },
      {
        path: 'countTo',
        name: 'CountTo',
        meta: {
          title: 'routes.demo.comp.countTo',
        },
      },
      {
        path: 'tree',
        name: 'TreeDemo',
        redirect: '/comp/tree/basic',
        meta: {
          title: 'routes.demo.comp.tree',
        },
        children: [
          {
            path: 'basic',
            name: 'BasicTreeDemo',
            meta: {
              title: 'routes.demo.comp.treeBasic',
            },
          },
          {
            path: 'editTree',
            name: 'EditTreeDemo',
            meta: {
              title: 'routes.demo.comp.editTree',
            },
          },
          {
            path: 'actionTree',
            name: 'ActionTreeDemo',
            meta: {
              title: 'routes.demo.comp.actionTree',
            },
          },
        ],
      },
      {
        path: 'editor',
        name: 'EditorDemo',
        redirect: '/comp/editor/markdown',
        meta: {
          title: 'routes.demo.editor.editor',
        },
        children: [
          {
            path: 'json',
            name: 'JsonEditorDemo',
            meta: {
              title: 'routes.demo.editor.jsonEditor',
            },
          },
          {
            path: 'markdown',
            name: 'MarkdownDemo',
            meta: {
              title: 'routes.demo.editor.markdown',
            },
            redirect: '/comp/editor/markdown/index',
            children: [
              {
                path: 'index',
                name: 'MarkDownBasicDemo',
                meta: {
                  title: 'routes.demo.editor.tinymceBasic',
                },
              },
              {
                path: 'editor',
                name: 'MarkDownFormDemo',
                meta: {
                  title: 'routes.demo.editor.tinymceForm',
                },
              },
            ],
          },
          {
            path: 'tinymce',
            name: 'TinymceDemo',
            meta: {
              title: 'routes.demo.editor.tinymce',
            },
            redirect: '/comp/editor/tinymce/index',
            children: [
              {
                path: 'index',
                name: 'TinymceBasicDemo',
                meta: {
                  title: 'routes.demo.editor.tinymceBasic',
                },
              },
              {
                path: 'editor',
                name: 'TinymceFormDemo',
                meta: {
                  title: 'routes.demo.editor.tinymceForm',
                },
              },
            ],
          },
        ],
      },
      {
        path: 'scroll',
        name: 'ScrollDemo',
        redirect: '/comp/scroll/basic',
        meta: {
          title: 'routes.demo.comp.scroll',
        },
        children: [
          {
            path: 'basic',
            name: 'BasicScrollDemo',
            meta: {
              title: 'routes.demo.comp.scrollBasic',
            },
          },
          {
            path: 'action',
            name: 'ActionScrollDemo',
            meta: {
              title: 'routes.demo.comp.scrollAction',
            },
          },
          {
            path: 'virtualScroll',
            name: 'VirtualScrollDemo',
            meta: {
              title: 'routes.demo.comp.virtualScroll',
            },
          },
        ],
      },
      {
        path: 'modal',
        name: 'ModalDemo',
        meta: {
          title: 'routes.demo.comp.modal',
        },
      },
      {
        path: 'drawer',
        name: 'DrawerDemo',
        meta: {
          title: 'routes.demo.comp.drawer',
        },
      },
      {
        path: 'desc',
        name: 'DescDemo',
        meta: {
          title: 'routes.demo.comp.desc',
        },
      },
      {
        path: 'verify',
        name: 'VerifyDemo',
        redirect: '/comp/verify/drag',
        meta: {
          title: 'routes.demo.comp.verify',
        },
        children: [
          {
            path: 'drag',
            name: 'VerifyDragDemo',
            meta: {
              title: 'routes.demo.comp.verifyDrag',
            },
          },
          {
            path: 'rotate',
            name: 'VerifyRotateDemo',
            meta: {
              title: 'routes.demo.comp.verifyRotate',
            },
          },
        ],
      },
      {
        path: 'qrcode',
        name: 'QrCodeDemo',
        meta: {
          title: 'routes.demo.comp.qrcode',
        },
      },
      {
        path: 'strength-meter',
        name: 'StrengthMeterDemo',
        meta: {
          title: 'routes.demo.comp.strength',
        },
      },
      {
        path: 'upload',
        name: 'UploadDemo',
        meta: {
          title: 'routes.demo.comp.upload',
        },
      },
      {
        path: 'loading',
        name: 'LoadingDemo',
        meta: {
          title: 'routes.demo.comp.loading',
        },
      },
      {
        path: 'cardList',
        name: 'CardListDemo',
        meta: {
          title: 'routes.demo.comp.cardList',
        },
      },
    ],
  },
  {
    path: '/feat',
    name: 'FeatDemo',
    redirect: '/feat/icon',
    meta: {
      orderNo: 19,
      icon: 'ion:git-compare-outline',
      title: 'routes.demo.feat.feat',
    },
    children: [
      {
        path: 'icon',
        name: 'IconDemo',
        meta: {
          title: 'routes.demo.feat.icon',
        },
      },
      {
        path: 'ws',
        name: 'WebSocket',
        meta: {
          title: 'routes.demo.feat.ws',
        },
      },
      {
        path: 'request',
        name: 'RequestDemo',
        meta: {
          title: 'routes.demo.feat.requestDemo',
        },
      },
      {
        path: 'session-timeout',
        name: 'SessionTimeout',
        meta: {
          title: 'routes.demo.feat.sessionTimeout',
        },
      },
      {
        path: 'print',
        name: 'Print',
        meta: {
          title: 'routes.demo.feat.print',
        },
      },
      {
        path: 'tabs',
        name: 'TabsDemo',
        meta: {
          title: 'routes.demo.feat.tabs',
          hideChildrenInMenu: true,
        },
        children: [
          {
            path: 'detail/:id',
            name: 'TabDetail',
            meta: {
              currentActiveMenu: '/feat/tabs',
              title: 'routes.demo.feat.tabDetail',
              hideMenu: true,
              dynamicLevel: 3,
              realPath: '/feat/tabs/detail',
            },
          },
        ],
      },
      {
        path: 'breadcrumb',
        name: 'BreadcrumbDemo',
        redirect: '/feat/breadcrumb/flat',
        meta: {
          title: 'routes.demo.feat.breadcrumb',
        },
        children: [
          {
            path: 'flat',
            name: 'BreadcrumbFlatDemo',
            meta: {
              title: 'routes.demo.feat.breadcrumbFlat',
            },
          },
          {
            path: 'flatDetail',
            name: 'BreadcrumbFlatDetailDemo',
            meta: {
              title: 'routes.demo.feat.breadcrumbFlatDetail',
              hideMenu: true,
              hideTab: true,
              currentActiveMenu: '/feat/breadcrumb/flat',
            },
          },
          {
            path: 'children',
            name: 'BreadcrumbChildrenDemo',
            meta: {
              title: 'routes.demo.feat.breadcrumbChildren',
            },
            children: [
              {
                path: 'childrenDetail',
                name: 'BreadcrumbChildrenDetailDemo',
                meta: {
                  currentActiveMenu: '/feat/breadcrumb/children',
                  title: 'routes.demo.feat.breadcrumbChildrenDetail',
                },
              },
            ],
          },
        ],
      },
      {
        path: 'context-menu',
        name: 'ContextMenuDemo',
        meta: {
          title: 'routes.demo.feat.contextMenu',
        },
      },
      {
        path: 'download',
        name: 'DownLoadDemo',
        meta: {
          title: 'routes.demo.feat.download',
        },
      },
      {
        path: 'click-out-side',
        name: 'ClickOutSideDemo',
        meta: {
          title: 'routes.demo.feat.clickOutSide',
        },
      },
      {
        path: 'img-preview',
        name: 'ImgPreview',
        meta: {
          title: 'routes.demo.feat.imgPreview',
        },
      },
      {
        path: 'copy',
        name: 'CopyDemo',
        meta: {
          title: 'routes.demo.feat.copy',
        },
      },
      {
        path: 'msg',
        name: 'MsgDemo',
        meta: {
          title: 'routes.demo.feat.msg',
        },
      },
      {
        path: 'watermark',
        name: 'WatermarkDemo',
        meta: {
          title: 'routes.demo.feat.watermark',
        },
      },
      {
        path: 'ripple',
        name: 'RippleDemo',
        meta: {
          title: 'routes.demo.feat.ripple',
        },
      },
      {
        path: 'full-screen',
        name: 'FullScreenDemo',
        meta: {
          title: 'routes.demo.feat.fullScreen',
        },
      },
      {
        path: '/error-log',
        name: 'ErrorLog',
        meta: {
          title: 'routes.demo.feat.errorLog',
        },
      },
      {
        path: 'excel',
        name: 'Excel',
        redirect: '/feat/excel/customExport',
        meta: {
          title: 'routes.demo.excel.excel',
        },
        children: [
          {
            path: 'customExport',
            name: 'CustomExport',
            meta: {
              title: 'routes.demo.excel.customExport',
            },
          },
          {
            path: 'jsonExport',
            name: 'JsonExport',
            meta: {
              title: 'routes.demo.excel.jsonExport',
            },
          },
          {
            path: 'arrayExport',
            name: 'ArrayExport',
            meta: {
              title: 'routes.demo.excel.arrayExport',
            },
          },
          {
            path: 'importExcel',
            name: 'ImportExcel',
            meta: {
              title: 'routes.demo.excel.importExcel',
            },
          },
        ],
      },
      {
        path: 'testTab/:id',
        name: 'TestTab',
        meta: {
          title: 'routes.demo.feat.tab',
          carryParam: true,
          hidePathForChildren: true,
        },
        children: [
          {
            path: 'testTab/id1',
            name: 'TestTab1',
            meta: {
              title: 'routes.demo.feat.tab1',
              carryParam: true,
              ignoreRoute: true,
            },
          },
          {
            path: 'testTab/id2',
            name: 'TestTab2',
            meta: {
              title: 'routes.demo.feat.tab2',
              carryParam: true,
              ignoreRoute: true,
            },
          },
        ],
      },
      {
        path: 'testParam/:id',
        name: 'TestParam',
        meta: {
          title: 'routes.demo.feat.menu',
          ignoreKeepAlive: true,
        },
        children: [
          {
            path: 'sub1',
            name: 'TestParam_1',
            meta: {
              title: 'routes.demo.feat.menu1',
              ignoreKeepAlive: true,
            },
          },
          {
            path: 'sub2',
            name: 'TestParam_2',
            meta: {
              title: 'routes.demo.feat.menu2',
              ignoreKeepAlive: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: '/flow',
    name: 'FlowDemo',
    redirect: '/flow/flowChart',
    meta: {
      orderNo: 5000,
      icon: 'tabler:chart-dots',
      title: 'routes.demo.flow.name',
    },
    children: [
      {
        path: 'flowChart',
        name: 'flowChartDemo',
        meta: {
          title: 'routes.demo.flow.flowChart',
        },
      },
    ],
  },
  {
    path: '/frame',
    name: 'Frame',
    redirect: '/frame/doc',
    meta: {
      orderNo: 1000,
      icon: 'ion:tv-outline',
      title: 'routes.demo.iframe.frame',
    },
    children: [
      {
        path: 'doc',
        name: 'Doc',
        meta: {
          frameSrc: 'https://doc.vvbin.cn/',
          title: 'routes.demo.iframe.doc',
        },
      },
      {
        path: 'antv',
        name: 'Antv',
        meta: {
          frameSrc: 'https://www.antdv.com/docs/vue/introduce-cn/',
          title: 'routes.demo.iframe.antv',
        },
      },
      {
        path: 'https://doc.vvbin.cn/',
        name: 'DocExternal',
        meta: {
          title: 'routes.demo.iframe.docExternal',
        },
      },
    ],
  },
  {
    path: '/level',
    name: 'Level',
    redirect: '/level/menu1/menu1-1/menu1-1-1',
    meta: {
      orderNo: 2000,
      icon: 'ion:menu-outline',
      title: 'routes.demo.level.level',
    },
    children: [
      {
        path: 'menu1',
        name: 'Menu1Demo',
        meta: {
          title: 'Menu1',
        },
        redirect: '/level/menu1/menu1-1/menu1-1-1',
        children: [
          {
            path: 'menu1-1',
            name: 'Menu11Demo',
            meta: {
              title: 'Menu1-1',
            },
            redirect: '/level/menu1/menu1-1/menu1-1-1',
            children: [
              {
                path: 'menu1-1-1',
                name: 'Menu111Demo',
                meta: {
                  title: 'Menu111',
                },
              },
            ],
          },
          {
            path: 'menu1-2',
            name: 'Menu12Demo',
            meta: {
              title: 'Menu1-2',
            },
          },
        ],
      },
      {
        path: 'menu2',
        name: 'Menu2Demo',
        meta: {
          title: 'Menu2',
        },
      },
    ],
  },
  {
    path: '/page-demo',
    name: 'PageDemo',
    redirect: '/page-demo/form/basic',
    meta: {
      orderNo: 20,
      icon: 'ion:aperture-outline',
      title: 'routes.demo.page.page',
    },
    children: [
      {
        path: 'form',
        name: 'FormPage',
        redirect: '/page-demo/form/basic',
        meta: {
          title: 'routes.demo.page.form',
        },
        children: [
          {
            path: 'basic',
            name: 'FormBasicPage',
            meta: {
              title: 'routes.demo.page.formBasic',
            },
          },
          {
            path: 'step',
            name: 'FormStepPage',
            meta: {
              title: 'routes.demo.page.formStep',
            },
          },
          {
            path: 'high',
            name: 'FormHightPage',
            meta: {
              title: 'routes.demo.page.formHigh',
            },
          },
        ],
      },
      {
        path: 'desc',
        name: 'DescPage',
        redirect: '/page-demo/desc/basic',
        meta: {
          title: 'routes.demo.page.desc',
        },
        children: [
          {
            path: 'basic',
            name: 'DescBasicPage',
            meta: {
              title: 'routes.demo.page.descBasic',
            },
          },
          {
            path: 'high',
            name: 'DescHighPage',
            meta: {
              title: 'routes.demo.page.descHigh',
            },
          },
        ],
      },
      {
        path: 'result',
        name: 'ResultPage',
        redirect: '/page-demo/result/success',
        meta: {
          title: 'routes.demo.page.result',
        },
        children: [
          {
            path: 'success',
            name: 'ResultSuccessPage',
            meta: {
              title: 'routes.demo.page.resultSuccess',
            },
          },
          {
            path: 'fail',
            name: 'ResultFailPage',
            meta: {
              title: 'routes.demo.page.resultFail',
            },
          },
        ],
      },
      {
        path: 'account',
        name: 'AccountPage',
        redirect: '/page-demo/account/setting',
        meta: {
          title: 'routes.demo.page.account',
        },
        children: [
          {
            path: 'center',
            name: 'AccountCenterPage',
            meta: {
              title: 'routes.demo.page.accountCenter',
            },
          },
          {
            path: 'setting',
            name: 'AccountSettingPage',
            meta: {
              title: 'routes.demo.page.accountSetting',
            },
          },
        ],
      },
      {
        path: 'exception',
        name: 'ExceptionPage',
        redirect: '/page-demo/exception/404',
        meta: {
          title: 'routes.demo.page.exception',
        },
        children: [
          {
            path: '403',
            name: 'PageNotAccess',
            props: {
              status: 403,
            },
            meta: {
              title: '403',
            },
          },
          {
            path: '404',
            name: 'PageNotFound',
            props: {
              status: 404,
            },
            meta: {
              title: '404',
            },
          },
          {
            path: '500',
            name: 'ServiceError',
            props: {
              status: 500,
            },
            meta: {
              title: '500',
            },
          },
          {
            path: 'net-work-error',
            name: 'NetWorkError',
            props: {
              status: 10000,
            },
            meta: {
              title: 'routes.demo.page.netWorkError',
            },
          },
          {
            path: 'not-data',
            name: 'NotData',
            props: {
              status: 10100,
            },
            meta: {
              title: 'routes.demo.page.notData',
            },
          },
        ],
      },
      {
        path: 'list',
        name: 'ListPage',
        redirect: '/page-demo/list/card',
        meta: {
          title: 'routes.demo.page.list',
        },
        children: [
          {
            path: 'basic',
            name: 'ListBasicPage',
            meta: {
              title: 'routes.demo.page.listBasic',
            },
          },
          {
            path: 'card',
            name: 'ListCardPage',
            meta: {
              title: 'routes.demo.page.listCard',
            },
          },
          {
            path: 'search',
            name: 'ListSearchPage',
            meta: {
              title: 'routes.demo.page.listSearch',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/permission',
    name: 'Permission',
    redirect: '/permission/menu',
    meta: {
      orderNo: 15,
      icon: 'ion:key-outline',
      title: 'routes.demo.permission.permission',
    },
    children: [
      {
        path: 'memu',
        name: 'PermissionMenu',
        meta: {
          title: 'routes.demo.permission.menu',
        },
        
      },
     
    ],
  },
  {
    path: '/setup',
    name: 'SetupDemo',
    redirect: '/setup/index',
    meta: {
      orderNo: 90000,
      hideChildrenInMenu: true,
      icon: 'whh:paintroll',
      title: 'routes.demo.setup.page',
    },
    children: [
      {
        path: 'index',
        name: 'SetupDemoPage',
        meta: {
          title: 'routes.demo.setup.page',
          icon: 'whh:paintroll',
          hideMenu: true,
        },
      },
    ],
  },
  {
    path: '/system',
    name: 'System',
    redirect: '/system/account',
    meta: {
      orderNo: 2000,
      icon: 'ion:settings-outline',
      title: 'routes.demo.system.moduleName',
    },
    children: [
      {
        path: 'account',
        name: 'AccountManagement',
        meta: {
          title: 'routes.demo.system.account',
          ignoreKeepAlive: false,
        },
      },
      {
        path: 'account_detail/:id',
        name: 'AccountDetail',
        meta: {
          hideMenu: true,
          title: 'routes.demo.system.account_detail',
          ignoreKeepAlive: true,
          showMenu: false,
          currentActiveMenu: '/system/account',
        },
      },
      {
        path: 'role',
        name: 'RoleManagement',
        meta: {
          title: 'routes.demo.system.role',
          ignoreKeepAlive: true,
        },
      },
      {
        path: 'menu',
        name: 'MenuManagement',
        meta: {
          title: 'routes.demo.system.menu',
          ignoreKeepAlive: true,
        },
      },
      {
        path: 'dept',
        name: 'DeptManagement',
        meta: {
          title: 'routes.demo.system.dept',
          ignoreKeepAlive: true,
        },
      },
      {
        path: 'changePassword',
        name: 'ChangePassword',
        meta: {
          title: 'routes.demo.system.password',
          ignoreKeepAlive: true,
        },
      },
    ],
  },
  {
    path: '/form-designer',
    name: 'Form-designer',
    meta: {
      orderNo: 10000,
      icon: 'ion:build-outline',
      title: '表单设计',
    },
    children: [
      {
        path: 'design',
        name: 'Design',
        meta: {
          title: '表单设计',
        },
      },
      {
        path: 'example1',
        name: 'Example1',
        meta: {
          title: '示例',
        },
      },
    ],
  },
];
