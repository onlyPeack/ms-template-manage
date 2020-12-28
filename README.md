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
      type: style/default,  属性类型(样式,图片)
      property:color/img    样式类型(颜色,图片)
    }
  ],
  text: [                   组件公开文案
    {
      label: String,        文案组名称
      type:nav/default      文案类型(导航,基础)
      children: [
        {
          label: String,    文案名称
          link: '#',        文案链接
          children: [
            {
              label: '云ERP',
              link: '#'
            }
          ]
        }
      ]
    }
  ],
  info:[String,String]      模板对外公开信息
},

```


