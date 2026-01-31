import{R as e}from"./index-D4H_InIO.js";import{S as t}from"./Divider-Ddy17Ooe.js";const w={title:"Components/SegmentedControl",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},n={render:()=>e.createElement(t,{size:"md"},e.createElement(t.Item,{selected:!0},"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"))},o={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"}},e.createElement(t,{size:"sm"},e.createElement(t.Item,{selected:!0},"Small"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3")),e.createElement(t,{size:"md"},e.createElement(t.Item,{selected:!0},"Medium"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3")),e.createElement(t,{size:"lg"},e.createElement(t.Item,{selected:!0},"Large"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3")))},m={render:()=>e.createElement("div",{style:{width:"400px"}},e.createElement(t,{size:"md",fullWidth:!0},e.createElement(t.Item,{selected:!0},"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3")))},d={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"}},e.createElement(t,{size:"md"},e.createElement(t.Item,{selected:!0},"Active"),e.createElement(t.Item,null,"Normal"),e.createElement(t.Item,{disabled:!0},"Disabled Item")),e.createElement(t,{size:"md",disabled:!0},e.createElement(t.Item,{selected:!0},"Disabled Control"),e.createElement(t.Item,null,"All Disabled"),e.createElement(t.Item,null,"Cannot Click")))},s={render:()=>{const[r,l]=e.useState("buy");return e.createElement("div",{style:{width:"300px"}},e.createElement(t,{size:"lg",fullWidth:!0},e.createElement(t.Item,{selected:r==="buy",onClick:()=>l("buy")},"Buy"),e.createElement(t.Item,{selected:r==="sell",onClick:()=>l("sell")},"Sell")),e.createElement("div",{style:{marginTop:"16px",padding:"16px",background:"#f5f5f5",borderRadius:"8px"}},e.createElement("div",{style:{fontWeight:600,marginBottom:"8px"}},r==="buy"?"Buy Order":"Sell Order"),e.createElement("div",{style:{fontSize:"14px",color:"#666"}},r==="buy"?"Enter the amount you want to buy":"Enter the amount you want to sell")))}},a={render:()=>{const[r,l]=e.useState("all");return e.createElement("div",{style:{width:"400px"}},e.createElement("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600}},"Tasks Filter"),e.createElement(t,{size:"md",fullWidth:!0},e.createElement(t.Item,{selected:r==="all",onClick:()=>l("all")},"All"),e.createElement(t.Item,{selected:r==="active",onClick:()=>l("active")},"Active"),e.createElement(t.Item,{selected:r==="completed",onClick:()=>l("completed")},"Completed")),e.createElement("div",{style:{marginTop:"16px",padding:"12px",border:"1px solid #e5e5e5",borderRadius:"8px"}},e.createElement("div",{style:{fontSize:"14px",color:"#666"}},"Showing: ",e.createElement("strong",{style:{color:"#000"}},r)," tasks")))}};var i,c,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <SegmentedControl size="md">\r
      <SegmentedControl.Item selected>Option 1</SegmentedControl.Item>\r
      <SegmentedControl.Item>Option 2</SegmentedControl.Item>\r
      <SegmentedControl.Item>Option 3</SegmentedControl.Item>\r
    </SegmentedControl>
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,S,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>\r
      <SegmentedControl size="sm">\r
        <SegmentedControl.Item selected>Small</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>\r
      </SegmentedControl>\r
      <SegmentedControl size="md">\r
        <SegmentedControl.Item selected>Medium</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>\r
      </SegmentedControl>\r
      <SegmentedControl size="lg">\r
        <SegmentedControl.Item selected>Large</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>\r
      </SegmentedControl>\r
    </div>
}`,...(u=(S=o.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var C,I,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <SegmentedControl size="md" fullWidth>\r
        <SegmentedControl.Item selected>Option 1</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>\r
      </SegmentedControl>\r
    </div>
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var y,x,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>\r
      <SegmentedControl size="md">\r
        <SegmentedControl.Item selected>Active</SegmentedControl.Item>\r
        <SegmentedControl.Item>Normal</SegmentedControl.Item>\r
        <SegmentedControl.Item disabled>Disabled Item</SegmentedControl.Item>\r
      </SegmentedControl>\r
      <SegmentedControl size="md" disabled>\r
        <SegmentedControl.Item selected>Disabled Control</SegmentedControl.Item>\r
        <SegmentedControl.Item>All Disabled</SegmentedControl.Item>\r
        <SegmentedControl.Item>Cannot Click</SegmentedControl.Item>\r
      </SegmentedControl>\r
    </div>
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,b,O;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<'buy' | 'sell'>('buy');
    return <div style={{
      width: '300px'
    }}>\r
        <SegmentedControl size="lg" fullWidth>\r
          <SegmentedControl.Item selected={selected === 'buy'} onClick={() => setSelected('buy')}>\r
            Buy\r
          </SegmentedControl.Item>\r
          <SegmentedControl.Item selected={selected === 'sell'} onClick={() => setSelected('sell')}>\r
            Sell\r
          </SegmentedControl.Item>\r
        </SegmentedControl>\r
        <div style={{
        marginTop: '16px',
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>\r
          <div style={{
          fontWeight: 600,
          marginBottom: '8px'
        }}>\r
            {selected === 'buy' ? 'Buy Order' : 'Sell Order'}\r
          </div>\r
          <div style={{
          fontSize: '14px',
          color: '#666'
        }}>\r
            {selected === 'buy' ? 'Enter the amount you want to buy' : 'Enter the amount you want to sell'}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(O=(b=s.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var h,z,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [filter, setFilter] = React.useState<'all' | 'active' | 'completed'>('all');
    return <div style={{
      width: '400px'
    }}>\r
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: 600
      }}>\r
          Tasks Filter\r
        </h3>\r
        <SegmentedControl size="md" fullWidth>\r
          <SegmentedControl.Item selected={filter === 'all'} onClick={() => setFilter('all')}>\r
            All\r
          </SegmentedControl.Item>\r
          <SegmentedControl.Item selected={filter === 'active'} onClick={() => setFilter('active')}>\r
            Active\r
          </SegmentedControl.Item>\r
          <SegmentedControl.Item selected={filter === 'completed'} onClick={() => setFilter('completed')}>\r
            Completed\r
          </SegmentedControl.Item>\r
        </SegmentedControl>\r
        <div style={{
        marginTop: '16px',
        padding: '12px',
        border: '1px solid #e5e5e5',
        borderRadius: '8px'
      }}>\r
          <div style={{
          fontSize: '14px',
          color: '#666'
        }}>\r
            Showing: <strong style={{
            color: '#000'
          }}>{filter}</strong> tasks\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(k=(z=a.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const F=["Default","Sizes","FullWidth","Disabled","BuySellExample","FilterExample"];export{s as BuySellExample,n as Default,d as Disabled,a as FilterExample,m as FullWidth,o as Sizes,F as __namedExportsOrder,w as default};
