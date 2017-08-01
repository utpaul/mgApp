export const APP_MENUS = {

  sidebar: [
      {
        label: 'গাছ নির্বাচন',
        cache: false,
        icon: 'ios-qr-scanner-outline',
        component: 'TreeSelectPage'
      },
      {
        label: 'আমার নির্বাচিত গাছ',
        cache: false,
        icon: 'ios-checkmark-circle-outline',
        component: 'SelectedTreeListPage'
      },
      {
        label: 'তথ্য সহায়তা',
        cache: false,
        icon: 'ios-help-circle-outline',
        component: 'TechnicalHelpPage'
      },
      {
        label: 'আমার বাগান পরিচর্যা',
        cache: false,
        icon: 'ios-leaf-outline',
        component: 'GardenCaringPage'
      },
      {
        label: 'সহায়ক প্রতিষ্টান',
        cache: false,
        icon: 'ios-information-circle-outline',
        component: 'HelpfulGardenPage'
      }
  ]

};
