import{R as e}from"./index-D4H_InIO.js";import{a as r}from"./Divider-Ddy17Ooe.js";const j={title:"Components/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outline","ghost","link"]},color:{control:"select",options:["primary","secondary","danger","success"]},size:{control:"select",options:["xs","sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"}}},t={args:{children:"Button",variant:"filled",color:"primary",size:"md"}},a={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(r,{variant:"filled"},"Filled"),e.createElement(r,{variant:"outline"},"Outline"),e.createElement(r,{variant:"ghost"},"Ghost"),e.createElement(r,{variant:"link"},"Link"))},o={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(r,{color:"primary"},"Primary"),e.createElement(r,{color:"secondary"},"Secondary"),e.createElement(r,{color:"danger"},"Danger"),e.createElement(r,{color:"success"},"Success"))},n={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(r,{size:"xs"},"Extra Small"),e.createElement(r,{size:"sm"},"Small"),e.createElement(r,{size:"md"},"Medium"),e.createElement(r,{size:"lg"},"Large"))},s={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(r,{variant:"outline",color:"primary"},"Primary"),e.createElement(r,{variant:"outline",color:"secondary"},"Secondary"),e.createElement(r,{variant:"outline",color:"danger"},"Danger"),e.createElement(r,{variant:"outline",color:"success"},"Success"))},l={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(r,{variant:"ghost",color:"primary"},"Primary"),e.createElement(r,{variant:"ghost",color:"secondary"},"Secondary"),e.createElement(r,{variant:"ghost",color:"danger"},"Danger"),e.createElement(r,{variant:"ghost",color:"success"},"Success"))},c={args:{children:"Disabled Button",disabled:!0}},i={args:{children:"Loading...",loading:!0}},d={args:{children:"Full Width Button",fullWidth:!0},decorators:[R=>e.createElement("div",{style:{width:"400px"}},e.createElement(R,null))]};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'primary',
    size: 'md'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,y,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button variant="filled">Filled</Button>\r
      <Button variant="outline">Outline</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="link">Link</Button>\r
    </div>
}`,...(B=(y=a.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var v,h,E;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button color="primary">Primary</Button>\r
      <Button color="secondary">Secondary</Button>\r
      <Button color="danger">Danger</Button>\r
      <Button color="success">Success</Button>\r
    </div>
}`,...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var x,S,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button size="xs">Extra Small</Button>\r
      <Button size="sm">Small</Button>\r
      <Button size="md">Medium</Button>\r
      <Button size="lg">Large</Button>\r
    </div>
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var z,D,b;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button variant="outline" color="primary">Primary</Button>\r
      <Button variant="outline" color="secondary">Secondary</Button>\r
      <Button variant="outline" color="danger">Danger</Button>\r
      <Button variant="outline" color="success">Success</Button>\r
    </div>
}`,...(b=(D=s.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var I,L,W;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button variant="ghost" color="primary">Primary</Button>\r
      <Button variant="ghost" color="secondary">Secondary</Button>\r
      <Button variant="ghost" color="danger">Danger</Button>\r
      <Button variant="ghost" color="success">Success</Button>\r
    </div>
}`,...(W=(L=l.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var F,P,V;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var k,O,G;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Loading...',
    loading: true
  }
}`,...(G=(O=i.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var C,w,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>\r
        <Story />\r
      </div>]
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const q=["Default","Variants","Colors","Sizes","OutlineVariants","GhostVariants","Disabled","Loading","FullWidth"];export{o as Colors,t as Default,c as Disabled,d as FullWidth,l as GhostVariants,i as Loading,s as OutlineVariants,n as Sizes,a as Variants,q as __namedExportsOrder,j as default};
