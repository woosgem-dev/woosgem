import{R as e}from"./index-D4H_InIO.js";import{T as a}from"./Divider-Ddy17Ooe.js";const R={title:"Components/Tab",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["underline","filled"]},size:{control:"select",options:["sm","md","lg"]},selected:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"}}},r={args:{children:"Tab",variant:"underline",size:"md",selected:!1,disabled:!1}},t={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(a,{variant:"underline"},"Underline"),e.createElement(a,{variant:"filled"},"Filled"))},l={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(a,{size:"sm"},"Small"),e.createElement(a,{size:"md"},"Medium"),e.createElement(a,{size:"lg"},"Large"))},n={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(a,{selected:!0},"Selected Tab"),e.createElement(a,null,"Unselected Tab"))},i={render:()=>e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(a,{disabled:!0},"Disabled Tab"),e.createElement(a,null,"Normal Tab"))},s={render:()=>e.createElement("div",{style:{width:"400px"}},e.createElement("div",{style:{display:"flex",gap:"0"}},e.createElement(a,{fullWidth:!0,selected:!0},"Home"),e.createElement(a,{fullWidth:!0},"Profile"),e.createElement(a,{fullWidth:!0},"Settings")))},d={render:()=>e.createElement("div",{style:{width:"500px"}},e.createElement("div",{style:{display:"flex",gap:"0",marginBottom:"24px"}},e.createElement(a,{variant:"underline",fullWidth:!0,selected:!0},"Overview"),e.createElement(a,{variant:"underline",fullWidth:!0},"Activity"),e.createElement(a,{variant:"underline",fullWidth:!0},"Analytics"),e.createElement(a,{variant:"underline",fullWidth:!0,disabled:!0},"Reports")),e.createElement("div",{style:{display:"flex",gap:"8px"}},e.createElement(a,{variant:"filled",selected:!0},"All"),e.createElement(a,{variant:"filled"},"Active"),e.createElement(a,{variant:"filled"},"Completed"),e.createElement(a,{variant:"filled"},"Archived")))};var c,o,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Tab',
    variant: 'underline',
    size: 'md',
    selected: false,
    disabled: false
  }
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Tab variant="underline">Underline</Tab>\r
      <Tab variant="filled">Filled</Tab>\r
    </div>
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,T,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Tab size="sm">Small</Tab>\r
      <Tab size="md">Medium</Tab>\r
      <Tab size="lg">Large</Tab>\r
    </div>
}`,...(f=(T=l.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var g,y,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Tab selected>Selected Tab</Tab>\r
      <Tab>Unselected Tab</Tab>\r
    </div>
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var E,h,S;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Tab disabled>Disabled Tab</Tab>\r
      <Tab>Normal Tab</Tab>\r
    </div>
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var W,z,A;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '0'
    }}>\r
        <Tab fullWidth selected>Home</Tab>\r
        <Tab fullWidth>Profile</Tab>\r
        <Tab fullWidth>Settings</Tab>\r
      </div>\r
    </div>
}`,...(A=(z=s.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var I,w,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '0',
      marginBottom: '24px'
    }}>\r
        <Tab variant="underline" fullWidth selected>Overview</Tab>\r
        <Tab variant="underline" fullWidth>Activity</Tab>\r
        <Tab variant="underline" fullWidth>Analytics</Tab>\r
        <Tab variant="underline" fullWidth disabled>Reports</Tab>\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: '8px'
    }}>\r
        <Tab variant="filled" selected>All</Tab>\r
        <Tab variant="filled">Active</Tab>\r
        <Tab variant="filled">Completed</Tab>\r
        <Tab variant="filled">Archived</Tab>\r
      </div>\r
    </div>
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const U=["Default","Variants","Sizes","Selected","Disabled","FullWidth","CompleteExample"];export{d as CompleteExample,r as Default,i as Disabled,s as FullWidth,n as Selected,l as Sizes,t as Variants,U as __namedExportsOrder,R as default};
