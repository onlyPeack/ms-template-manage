# ms-template-manage

## Project install
```
npm install ms-template-manage
```

### Import public css
```
import 'ms-template-manage/src/assets/css/ms-template-manage.css'
```

### Use
```
import ms-template-manage form 'ms-template-manage'
Vue.use(ms-template-manage)
```

### Components import address
```
ms-template-manage/src/components
```

### 预设内容结构

```
module: {
  name: String,             组件名(仅用作展示)
  type:default/list/detail, 组件类型(基础,列表,详情)
  style: [                  组件公开样式
    {
      label: String,
      name: css-name,       css属性名
      value: String,        css属性值
      index: 0,             在Style中的索引(暂未使用)
      type: 'style',
      property:'color'
    }
  ],
  text: [                   组件公开文案
    {
      label: '文字组合1',
      children: [
        {
          label: '产品介绍',
          link: '#',
          children: [
            {
              label: '云ERP',
              link: '#'
            }, {
              label: '云电商',
              link: '#'
            }, {
              label: '云课堂',
              link: '#'
            }, {
              label: '云仓储',
              link: '#'
            }
          ]
        }
      ]
    }
  ]
},

```


