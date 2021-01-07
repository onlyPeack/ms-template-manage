import { shallowMount,mount } from '@vue/test-utils';
import msSelfHead from '../head/ms-self-head'
import Vue from 'vue'
import ElementUI from 'element-ui';
Vue.use(ElementUI)
describe('<ms-self-head/>', () => {
  const wrapper = mount(msSelfHead);
  const vm = wrapper.vm
  it('获取model', () => {
    //await wrapper.setData({})
    expect(wrapper.text()).toContain('a')
  })
  //console.log(wrapper)
});
