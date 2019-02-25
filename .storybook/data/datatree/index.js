const torontoOrders = [
  {
    value: 100,
    title: 'Shirts',
    id: 'datatreeSubitem3'
  },
  {
    value: 50,
    title: 'Pants',
    id: 'datatreeSubitem4'
  },
  {
    value: 35,
    title: 'Shoes',
    id: 'datatreeSubitem5'
  }
];

const ottawaOrders = [
  {
    value: 980,
    title: 'Shirts',
    id: 'datatreeSubitem6'
  },
  {
    value: 250,
    title: 'Pants',
    id: 'datatreeSubitem7'
  },
  {
    value: 135,
    title: 'Shoes',
    id: 'datatreeSubitem8'
  }
];

export const dataTreeItems = [
  {
    id: 'datatreeItem1',
    title: 'Locations',
    item: ['Toronto', 'Ottawa']
  },
  {
    id: 'datatreeItem2',
    title: 'Orders',
    item: [
      {
        title: 'Toronto',
        value: torontoOrders,
        id: 'datatreeSubitem1',
      },
      {
        title: 'Ottawa',
        value: ottawaOrders,
        id: 'datatreeSubitem2'
      }
    ]
  },
  {
    id: 'datatreeItem3',
    item: 29,
    title: 'Returns'
  },
  {
    id: 'datatreeItem4',
    title: 'Other'
  }
];
