export const APP_MENUS = {

  sidebar: [
      // {
      //   label: 'গাছ বা ফসল নির্বাচন',
      //   cache: false,
      //   icon: 'ios-qr-scanner-outline',
      //   component: 'TreeSelectPage'
      // },
      {
        label: 'আমার লাগানো গাছ',
        cache: false,
        icon: 'ios-checkmark-circle-outline',
        component: 'SelectedTreeListPage'
      },
      {
        label: 'এল টু এন থেকে তথ্য সহায়তা',
        cache: false,
        icon: 'ios-help-circle-outline',
        component: 'TechnicalHelpPage'
      },
      {
        label: 'বাগান পরিচর্যা',
        cache: false,
        icon: 'ios-leaf-outline',
        component: 'GardenCaringPage'
      },
      {
        label: 'সহায়ক প্রতিষ্ঠান ও জনবল',
        cache: false,
        icon: 'ios-information-circle-outline',
        component: 'HelpfulGardenPage'
      },
      {
        label: 'অপসারিত গাছ',
        cache: false,
        icon: 'md-trash',
        component: 'RemoveTreePage'
      }

      // },
      // {
      //   label: 'সেটিংস',
      //   cache: false,
      //   icon: 'ios-settings-outline',
      //   component: 'SettingsPage'
      // }
  ]

};
