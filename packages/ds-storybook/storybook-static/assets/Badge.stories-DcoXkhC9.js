import{R as e}from"./index-D4H_InIO.js";import{B as r}from"./Divider-Ddy17Ooe.js";const h={title:"Components/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outline","subtle"]},color:{control:"select",options:["primary","secondary","danger","success","warning","info"]},size:{control:"select",options:["sm","md","lg"]}}},a={args:{children:"Badge",variant:"solid",color:"primary",size:"md"}},t={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(r,{variant:"solid"},"Solid"),e.createElement(r,{variant:"outline"},"Outline"),e.createElement(r,{variant:"subtle"},"Subtle"))},n={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"}},e.createElement(r,{color:"primary"},"Primary"),e.createElement(r,{color:"secondary"},"Secondary"),e.createElement(r,{color:"danger"},"Danger"),e.createElement(r,{color:"success"},"Success"),e.createElement(r,{color:"warning"},"Warning"),e.createElement(r,{color:"info"},"Info"))},o={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(r,{size:"sm"},"Small"),e.createElement(r,{size:"md"},"Medium"),e.createElement(r,{size:"lg"},"Large"))},s={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"}},e.createElement(r,{variant:"outline",color:"primary"},"Primary"),e.createElement(r,{variant:"outline",color:"secondary"},"Secondary"),e.createElement(r,{variant:"outline",color:"danger"},"Danger"),e.createElement(r,{variant:"outline",color:"success"},"Success"),e.createElement(r,{variant:"outline",color:"warning"},"Warning"),e.createElement(r,{variant:"outline",color:"info"},"Info"))},l={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"}},e.createElement(r,{variant:"subtle",color:"primary"},"Primary"),e.createElement(r,{variant:"subtle",color:"secondary"},"Secondary"),e.createElement(r,{variant:"subtle",color:"danger"},"Danger"),e.createElement(r,{variant:"subtle",color:"success"},"Success"),e.createElement(r,{variant:"subtle",color:"warning"},"Warning"),e.createElement(r,{variant:"subtle",color:"info"},"Info"))},c={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(r,{color:"success"},"Active"),e.createElement(r,{color:"warning"},"Pending"),e.createElement(r,{color:"danger"},"Error"),e.createElement(r,{color:"info"},"New"))};var i,d,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'solid',
    color: 'primary',
    size: 'md'
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Badge variant="solid">Solid</Badge>\r
      <Badge variant="outline">Outline</Badge>\r
      <Badge variant="subtle">Subtle</Badge>\r
    </div>
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var B,y,v;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Badge color="primary">Primary</Badge>\r
      <Badge color="secondary">Secondary</Badge>\r
      <Badge color="danger">Danger</Badge>\r
      <Badge color="success">Success</Badge>\r
      <Badge color="warning">Warning</Badge>\r
      <Badge color="info">Info</Badge>\r
    </div>
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,E,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Badge size="sm">Small</Badge>\r
      <Badge size="md">Medium</Badge>\r
      <Badge size="lg">Large</Badge>\r
    </div>
}`,...(x=(E=o.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var S,b,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Badge variant="outline" color="primary">Primary</Badge>\r
      <Badge variant="outline" color="secondary">Secondary</Badge>\r
      <Badge variant="outline" color="danger">Danger</Badge>\r
      <Badge variant="outline" color="success">Success</Badge>\r
      <Badge variant="outline" color="warning">Warning</Badge>\r
      <Badge variant="outline" color="info">Info</Badge>\r
    </div>
}`,...(I=(b=s.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var w,W,z;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Badge variant="subtle" color="primary">Primary</Badge>\r
      <Badge variant="subtle" color="secondary">Secondary</Badge>\r
      <Badge variant="subtle" color="danger">Danger</Badge>\r
      <Badge variant="subtle" color="success">Success</Badge>\r
      <Badge variant="subtle" color="warning">Warning</Badge>\r
      <Badge variant="subtle" color="info">Info</Badge>\r
    </div>
}`,...(z=(W=l.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var D,P,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Badge color="success">Active</Badge>\r
      <Badge color="warning">Pending</Badge>\r
      <Badge color="danger">Error</Badge>\r
      <Badge color="info">New</Badge>\r
    </div>
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const A=["Default","Variants","Colors","Sizes","OutlineVariants","SubtleVariants","StatusBadges"];export{n as Colors,a as Default,s as OutlineVariants,o as Sizes,c as StatusBadges,l as SubtleVariants,t as Variants,A as __namedExportsOrder,h as default};
