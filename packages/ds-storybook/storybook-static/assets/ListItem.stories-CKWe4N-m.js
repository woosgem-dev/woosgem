import{R as e}from"./index-D4H_InIO.js";import{L as t}from"./Divider-Ddy17Ooe.js";const B={title:"Components/ListItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","interactive"]},selected:{control:"boolean"},disabled:{control:"boolean"},divider:{control:"boolean"}}},r={args:{children:"List Item",variant:"default"},decorators:[R=>e.createElement("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0}},e.createElement(R,null))]},i={render:()=>e.createElement("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0}},e.createElement(t,{variant:"default"},"Default Variant"),e.createElement(t,{variant:"interactive"},"Interactive Variant"))},a={render:()=>e.createElement("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0}},e.createElement(t,{variant:"interactive",onClick:()=>alert("Clicked!")},"Click me"),e.createElement(t,{variant:"interactive",onClick:()=>alert("Another click!")},"Click me too"))},n={render:()=>e.createElement("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0}},e.createElement(t,{variant:"interactive",selected:!0},"Selected Item"),e.createElement(t,{variant:"interactive"},"Unselected Item"),e.createElement(t,{variant:"interactive"},"Another Item"))},s={render:()=>e.createElement("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0}},e.createElement(t,{variant:"interactive"},"Normal Item"),e.createElement(t,{variant:"interactive",disabled:!0},"Disabled Item"),e.createElement(t,{variant:"interactive"},"Another Item"))},l={render:()=>e.createElement("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0}},e.createElement(t,{divider:!0},"First Item"),e.createElement(t,{divider:!0},"Second Item"),e.createElement(t,{divider:!0},"Third Item"),e.createElement(t,null,"Last Item (no divider)"))},d={render:()=>e.createElement("div",{style:{width:"400px"}},e.createElement("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600}},"Navigation Menu"),e.createElement("ul",{style:{listStyle:"none",padding:0,margin:0,border:"1px solid #e5e5e5",borderRadius:"8px"}},e.createElement(t,{variant:"interactive",selected:!0,divider:!0},"Dashboard"),e.createElement(t,{variant:"interactive",divider:!0},"Projects"),e.createElement(t,{variant:"interactive",divider:!0},"Team"),e.createElement(t,{variant:"interactive",disabled:!0,divider:!0},"Settings (Coming Soon)"),e.createElement(t,{variant:"interactive"},"Logout")))},c={render:()=>e.createElement("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0}},e.createElement(t,{variant:"default"},"Default"),e.createElement(t,{variant:"interactive"},"Interactive"),e.createElement(t,{variant:"interactive",selected:!0},"Selected"),e.createElement(t,{variant:"interactive",disabled:!0},"Disabled"),e.createElement(t,{variant:"interactive",divider:!0},"With Divider"))};var m,o,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'List Item',
    variant: 'default'
  },
  decorators: [Story => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
        <Story />\r
      </ul>]
}`,...(v=(o=r.parameters)==null?void 0:o.docs)==null?void 0:v.source}}};var u,p,I;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem variant="default">Default Variant</ListItem>\r
      <ListItem variant="interactive">Interactive Variant</ListItem>\r
    </ul>
}`,...(I=(p=i.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var L,g,S;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem variant="interactive" onClick={() => alert('Clicked!')}>\r
        Click me\r
      </ListItem>\r
      <ListItem variant="interactive" onClick={() => alert('Another click!')}>\r
        Click me too\r
      </ListItem>\r
    </ul>
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,E,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem variant="interactive" selected>\r
        Selected Item\r
      </ListItem>\r
      <ListItem variant="interactive">Unselected Item</ListItem>\r
      <ListItem variant="interactive">Another Item</ListItem>\r
    </ul>
}`,...(h=(E=n.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var x,b,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem variant="interactive">Normal Item</ListItem>\r
      <ListItem variant="interactive" disabled>\r
        Disabled Item\r
      </ListItem>\r
      <ListItem variant="interactive">Another Item</ListItem>\r
    </ul>
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var D,w,C;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem divider>First Item</ListItem>\r
      <ListItem divider>Second Item</ListItem>\r
      <ListItem divider>Third Item</ListItem>\r
      <ListItem>Last Item (no divider)</ListItem>\r
    </ul>
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,A,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <h3 style={{
      marginBottom: '12px',
      fontSize: '16px',
      fontWeight: 600
    }}>\r
        Navigation Menu\r
      </h3>\r
      <ul style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      border: '1px solid #e5e5e5',
      borderRadius: '8px'
    }}>\r
        <ListItem variant="interactive" selected divider>\r
          Dashboard\r
        </ListItem>\r
        <ListItem variant="interactive" divider>\r
          Projects\r
        </ListItem>\r
        <ListItem variant="interactive" divider>\r
          Team\r
        </ListItem>\r
        <ListItem variant="interactive" disabled divider>\r
          Settings (Coming Soon)\r
        </ListItem>\r
        <ListItem variant="interactive">\r
          Logout\r
        </ListItem>\r
      </ul>\r
    </div>
}`,...(V=(A=d.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var W,T,N;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem variant="default">Default</ListItem>\r
      <ListItem variant="interactive">Interactive</ListItem>\r
      <ListItem variant="interactive" selected>Selected</ListItem>\r
      <ListItem variant="interactive" disabled>Disabled</ListItem>\r
      <ListItem variant="interactive" divider>With Divider</ListItem>\r
    </ul>
}`,...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const F=["Default","Variants","Interactive","Selected","Disabled","WithDivider","CompleteExample","AllStates"];export{c as AllStates,d as CompleteExample,r as Default,s as Disabled,a as Interactive,n as Selected,i as Variants,l as WithDivider,F as __namedExportsOrder,B as default};
