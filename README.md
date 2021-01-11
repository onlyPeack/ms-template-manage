# ms-template-manage

## Project install
```
npm install ms-template-manage
```

### Import public css
```
import 'ms-template-manage/src/assets/css/ms-template-manage.css'
```

### Import animation
```
import 'ms-template-manage/src/assets/css/ms-animation.css'
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
  name: String,             组件名(仅用作展示)  *
  classId:String            最外层classId  *
  type:default/list/detail, 组件类型(基础,列表,详情)
  limit:Number              最大展示数量(设置后使用articleList遍历数据)
  style: [                  组件公开样式
    {
      label: String,
      name: css-var-name,   css自定义变量名
      value: String,        css属性值
      index: 0,             在Style中的索引(暂废弃)
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
          value: String,    文案值
          link: '#',        文案链接
          type:textArea/default  文案类型(文本域/默认)(未实现)
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
  article: [                组件类型为列表时
    {
      title:String ,        标题
      pic:String,           图片
      description:String,   描述
      releaseTime: String,  发布时间
      link:String           链接
    },
  ]
  info:[String,String]      模板对外公开信息
},

```


