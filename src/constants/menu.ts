export const APP_MENUS = {

  sidebar: [
      {
        label: 'গাছ বা ফসল নির্বাচন',
        cache: false,
        icon: 'ios-qr-scanner-outline',
        component: 'TreeSelectPage'
      },
      {
        label: 'আমার লাগানো গাছ বা ফসল',
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
      },
      {
        label: 'সেটিংস',
        cache: false,
        icon: 'ios-settings-outline',
        component: 'SettingsPage'
      }
  ]

};
