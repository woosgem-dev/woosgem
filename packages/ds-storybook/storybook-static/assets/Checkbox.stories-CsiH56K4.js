import{R as e}from"./index-D4H_InIO.js";import{C as r}from"./Divider-Ddy17Ooe.js";const A={title:"Components/Checkbox",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}}},c={args:{children:"Checkbox label",size:"md"}},a={args:{children:"Checked checkbox",checked:!0}},t={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(r,null,"Unchecked"),e.createElement(r,{checked:!0},"Checked"),e.createElement(r,{indeterminate:!0},"Indeterminate"),e.createElement(r,{disabled:!0},"Disabled"),e.createElement(r,{checked:!0,disabled:!0},"Checked & Disabled"))},s={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(r,{size:"sm",checked:!0},"Small checkbox"),e.createElement(r,{size:"md",checked:!0},"Medium checkbox"),e.createElement(r,{size:"lg",checked:!0},"Large checkbox"))},o={args:{children:"Select all items",indeterminate:!0}},n={args:{children:"Disabled option",disabled:!0}},d={args:{children:"Checked and disabled",checked:!0,disabled:!0}},l={args:{"aria-label":"Select this item",checked:!0}},i={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(r,{name:"terms",checked:!0},"I agree to the Terms of Service"),e.createElement(r,{name:"newsletter"},"Subscribe to newsletter"),e.createElement(r,{name:"marketing"},"Receive marketing emails"))};var m,h,k;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Checkbox label',
    size: 'md'
  }
}`,...(k=(h=c.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var b,p,u;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Checked checkbox',
    checked: true
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,g,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Checkbox>Unchecked</Checkbox>\r
      <Checkbox checked>Checked</Checkbox>\r
      <Checkbox indeterminate>Indeterminate</Checkbox>\r
      <Checkbox disabled>Disabled</Checkbox>\r
      <Checkbox checked disabled>Checked & Disabled</Checkbox>\r
    </div>
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var S,f,D;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Checkbox size="sm" checked>Small checkbox</Checkbox>\r
      <Checkbox size="md" checked>Medium checkbox</Checkbox>\r
      <Checkbox size="lg" checked>Large checkbox</Checkbox>\r
    </div>
}`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var E,y,v;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Select all items',
    indeterminate: true
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var z,I,w;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Disabled option',
    disabled: true
  }
}`,...(w=(I=n.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var L,R,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Checked and disabled',
    checked: true,
    disabled: true
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var F,M,U;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select this item',
    checked: true
  }
}`,...(U=(M=l.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var W,_,O;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>\r
      <Checkbox name="terms" checked>I agree to the Terms of Service</Checkbox>\r
      <Checkbox name="newsletter">Subscribe to newsletter</Checkbox>\r
      <Checkbox name="marketing">Receive marketing emails</Checkbox>\r
    </div>
}`,...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const B=["Default","Checked","States","Sizes","Indeterminate","Disabled","CheckedDisabled","WithoutLabel","FormExample"];export{a as Checked,d as CheckedDisabled,c as Default,n as Disabled,i as FormExample,o as Indeterminate,s as Sizes,t as States,l as WithoutLabel,B as __namedExportsOrder,A as default};
