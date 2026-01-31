import{R as e}from"./index-D4H_InIO.js";import{A as a}from"./Divider-Ddy17Ooe.js";const B={title:"Components/Avatar",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},shape:{control:"select",options:["circle","square"]},src:{control:"text"},alt:{control:"text"},fallback:{control:"text"}}},r={args:{size:"md",shape:"circle",fallback:"JD",children:"JD"}},t={render:()=>e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement(a,{size:"xs",fallback:"XS"},"XS"),e.createElement(a,{size:"sm",fallback:"SM"},"SM"),e.createElement(a,{size:"md",fallback:"MD"},"MD"),e.createElement(a,{size:"lg",fallback:"LG"},"LG"),e.createElement(a,{size:"xl",fallback:"XL"},"XL"))},s={render:()=>e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement(a,{shape:"circle",fallback:"JD"},"JD"),e.createElement(a,{shape:"square",fallback:"JD"},"JD"))},l={render:()=>e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement(a,{size:"md",shape:"circle",src:"https://i.pravatar.cc/150?img=1",alt:"User avatar"}),e.createElement(a,{size:"lg",shape:"circle",src:"https://i.pravatar.cc/150?img=2",alt:"User avatar"}),e.createElement(a,{size:"xl",shape:"circle",src:"https://i.pravatar.cc/150?img=3",alt:"User avatar"}))},c={render:()=>e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement(a,{fallback:"AB"},"AB"),e.createElement(a,{fallback:"CD"},"CD"),e.createElement(a,{fallback:"EF"},"EF"),e.createElement(a,{fallback:"GH"},"GH"))},i={render:()=>e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement(a,{size:"sm",shape:"square",src:"https://i.pravatar.cc/150?img=4",alt:"User avatar"}),e.createElement(a,{size:"md",shape:"square",src:"https://i.pravatar.cc/150?img=5",alt:"User avatar"}),e.createElement(a,{size:"lg",shape:"square",src:"https://i.pravatar.cc/150?img=6",alt:"User avatar"}))},p={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"24px"}},e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(a,{size:"lg",src:"https://i.pravatar.cc/150?img=7",alt:"John Doe"}),e.createElement("div",null,e.createElement("div",{style:{fontWeight:600,marginBottom:"4px"}},"John Doe"),e.createElement("div",{style:{fontSize:"14px",color:"#666"}},"john.doe@example.com"))),e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement(a,{size:"sm",fallback:"JD"},"JD"),e.createElement(a,{size:"sm",fallback:"AB"},"AB"),e.createElement(a,{size:"sm",fallback:"CD"},"CD"),e.createElement(a,{size:"sm",fallback:"EF"},"EF"),e.createElement("span",{style:{fontSize:"14px",color:"#666"}},"+5 more")))};var m,n,o;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'md',
    shape: 'circle',
    fallback: 'JD',
    children: 'JD'
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var d,v,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <Avatar size="xs" fallback="XS">XS</Avatar>\r
      <Avatar size="sm" fallback="SM">SM</Avatar>\r
      <Avatar size="md" fallback="MD">MD</Avatar>\r
      <Avatar size="lg" fallback="LG">LG</Avatar>\r
      <Avatar size="xl" fallback="XL">XL</Avatar>\r
    </div>
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,x,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <Avatar shape="circle" fallback="JD">JD</Avatar>\r
      <Avatar shape="square" fallback="JD">JD</Avatar>\r
    </div>
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var A,E,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <Avatar size="md" shape="circle" src="https://i.pravatar.cc/150?img=1" alt="User avatar" />\r
      <Avatar size="lg" shape="circle" src="https://i.pravatar.cc/150?img=2" alt="User avatar" />\r
      <Avatar size="xl" shape="circle" src="https://i.pravatar.cc/150?img=3" alt="User avatar" />\r
    </div>
}`,...(z=(E=l.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var u,y,D;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <Avatar fallback="AB">AB</Avatar>\r
      <Avatar fallback="CD">CD</Avatar>\r
      <Avatar fallback="EF">EF</Avatar>\r
      <Avatar fallback="GH">GH</Avatar>\r
    </div>
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var b,k,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <Avatar size="sm" shape="square" src="https://i.pravatar.cc/150?img=4" alt="User avatar" />\r
      <Avatar size="md" shape="square" src="https://i.pravatar.cc/150?img=5" alt="User avatar" />\r
      <Avatar size="lg" shape="square" src="https://i.pravatar.cc/150?img=6" alt="User avatar" />\r
    </div>
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var J,I,U;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>\r
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=7" alt="John Doe" />\r
        <div>\r
          <div style={{
          fontWeight: 600,
          marginBottom: '4px'
        }}>John Doe</div>\r
          <div style={{
          fontSize: '14px',
          color: '#666'
        }}>john.doe@example.com</div>\r
        </div>\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>\r
        <Avatar size="sm" fallback="JD">JD</Avatar>\r
        <Avatar size="sm" fallback="AB">AB</Avatar>\r
        <Avatar size="sm" fallback="CD">CD</Avatar>\r
        <Avatar size="sm" fallback="EF">EF</Avatar>\r
        <span style={{
        fontSize: '14px',
        color: '#666'
      }}>+5 more</span>\r
      </div>\r
    </div>
}`,...(U=(I=p.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const F=["Default","Sizes","Shapes","WithImage","WithFallback","SquareWithImage","CompleteExample"];export{p as CompleteExample,r as Default,s as Shapes,t as Sizes,i as SquareWithImage,c as WithFallback,l as WithImage,F as __namedExportsOrder,B as default};
