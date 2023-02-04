export default function useLayout(initLayout, customLayout) {
  const layout = customLayout
    ? [...new Set(customLayout)]
    : Object.entries(initLayout).map(([layoutName]) => layoutName);
  const ojb = new Set([1,2,3,4])
  console.log(ojb);
  const layouts = {};
  for (let layoutName in initLayout) {
    layouts[layoutName] = layout.includes(layoutName)
      ? initLayout[layoutName]
      : null;
  }
  return layouts;
}
