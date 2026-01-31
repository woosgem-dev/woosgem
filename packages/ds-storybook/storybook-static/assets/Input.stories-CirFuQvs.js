import{R as e}from"./index-D4H_InIO.js";import{b as r}from"./Divider-Ddy17Ooe.js";const G={title:"Components/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled","underline"]},size:{control:"select",options:["sm","md","lg"]},error:{control:"boolean"},success:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"}}},a={args:{placeholder:"Enter text...",variant:"outline",size:"md"}},t={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"}},e.createElement(r,{variant:"outline",placeholder:"Outline variant"}),e.createElement(r,{variant:"filled",placeholder:"Filled variant"}),e.createElement(r,{variant:"underline",placeholder:"Underline variant"}))},l={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"}},e.createElement(r,{size:"sm",placeholder:"Small input"}),e.createElement(r,{size:"md",placeholder:"Medium input"}),e.createElement(r,{size:"lg",placeholder:"Large input"}))},n={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"}},e.createElement(r,{placeholder:"Normal input"}),e.createElement(r,{error:!0,placeholder:"Error state"}),e.createElement(r,{success:!0,placeholder:"Success state"}),e.createElement(r,{disabled:!0,placeholder:"Disabled state"}))},s={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"}},e.createElement(r,{variant:"filled",placeholder:"Normal"}),e.createElement(r,{variant:"filled",error:!0,placeholder:"Error"}),e.createElement(r,{variant:"filled",success:!0,placeholder:"Success"}),e.createElement(r,{variant:"filled",disabled:!0,placeholder:"Disabled"}))},c={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"}},e.createElement(r,{variant:"underline",placeholder:"Normal"}),e.createElement(r,{variant:"underline",error:!0,placeholder:"Error"}),e.createElement(r,{variant:"underline",success:!0,placeholder:"Success"}),e.createElement(r,{variant:"underline",disabled:!0,placeholder:"Disabled"}))},i={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"}},e.createElement(r,{type:"text",placeholder:"Text input"}),e.createElement(r,{type:"email",placeholder:"Email input"}),e.createElement(r,{type:"password",placeholder:"Password input"}),e.createElement(r,{type:"number",placeholder:"Number input"}),e.createElement(r,{type:"search",placeholder:"Search input"}))},o={args:{placeholder:"Invalid email address",error:!0}},d={args:{placeholder:"Valid input",success:!0}},p={args:{placeholder:"Disabled input",disabled:!0}};var u,m,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    variant: 'outline',
    size: 'md'
  }
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,v,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input variant="outline" placeholder="Outline variant" />\r
      <Input variant="filled" placeholder="Filled variant" />\r
      <Input variant="underline" placeholder="Underline variant" />\r
    </div>
}`,...(E=(v=t.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,y,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input size="sm" placeholder="Small input" />\r
      <Input size="md" placeholder="Medium input" />\r
      <Input size="lg" placeholder="Large input" />\r
    </div>
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var S,I,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input placeholder="Normal input" />\r
      <Input error placeholder="Error state" />\r
      <Input success placeholder="Success state" />\r
      <Input disabled placeholder="Disabled state" />\r
    </div>
}`,...(b=(I=n.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var D,w,z;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input variant="filled" placeholder="Normal" />\r
      <Input variant="filled" error placeholder="Error" />\r
      <Input variant="filled" success placeholder="Success" />\r
      <Input variant="filled" disabled placeholder="Disabled" />\r
    </div>
}`,...(z=(w=s.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var N,V,T;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input variant="underline" placeholder="Normal" />\r
      <Input variant="underline" error placeholder="Error" />\r
      <Input variant="underline" success placeholder="Success" />\r
      <Input variant="underline" disabled placeholder="Disabled" />\r
    </div>
}`,...(T=(V=c.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var F,U,O;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input type="text" placeholder="Text input" />\r
      <Input type="email" placeholder="Email input" />\r
      <Input type="password" placeholder="Password input" />\r
      <Input type="number" placeholder="Number input" />\r
      <Input type="search" placeholder="Search input" />\r
    </div>
}`,...(O=(U=i.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var L,M,P;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: 'Invalid email address',
    error: true
  }
}`,...(P=(M=o.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var R,_,C;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    placeholder: 'Valid input',
    success: true
  }
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var j,k,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...(q=(k=p.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const H=["Default","Variants","Sizes","States","FilledVariantStates","UnderlineVariantStates","InputTypes","Error","Success","Disabled"];export{a as Default,p as Disabled,o as Error,s as FilledVariantStates,i as InputTypes,l as Sizes,n as States,d as Success,c as UnderlineVariantStates,t as Variants,H as __namedExportsOrder,G as default};
