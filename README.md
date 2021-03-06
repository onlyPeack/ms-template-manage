# ms-template-manage

## Project install
```
npm install ms-template-manage
```

### Import public css
```
import 'ms-template-manage/lib/ms-template-manage.css'
```

### Import animation
```
import 'ms-template-manage/src/assets/css/ms-animation.css'
```

### Use ALL
```
import ms-template-manage form 'ms-template-manage'
Vue.use(ms-template-manage)
```

### Use section 
need babel-plugin-component support
```
import {ms-template-manage1,ms-template-manage2} form 'ms-template-manage'
Vue.use(ms-template-manage1)
Vue.use(ms-template-manage2)
```




### Components import address
```
ms-template-manage/src/components
```

每个组件都有getModule和setModule两个对外公开方法,直接获取组件元素后调用即可,用于设置和获取module,
修改module中的值后setModule将直接引起view的变化



### 预设模板数据结构

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
      css:cssName           css属性名(仅select时需要)
      value: String,        css属性值
      index: 0,             在Style中的索引(暂废弃)
      type: style/default,  属性类型(样式,默认)
      property:color/img/select    样式类型(颜色,图片,可选择属性)
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
      name:String           栏目名(仅三级栏目)
      title:String ,        标题
      pic:String,           图片
      description:String,   描述
      releaseTime: String,  发布时间
      link:String           链接
      publisher:String      发布人
      pageviews:Number      浏览量
      children:[]           仅三级文章栏目存在
    },
  ],
  detail:{                  详情(仅为详情页时使用) 
    before:{                上一篇文章数据
        id:String
        name:String
        title:String,
        releaseTime:String,
        content:String, 
    },
    mid:{}                  当前文章数据
    after:{}                下一篇文章数据     
  }

  info:[String,String]      模板对外公开信息
},

```


