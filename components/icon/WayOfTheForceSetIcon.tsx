import IconBase, { IconBaseProps } from "./IconBase";
import { NextFunctionComponent } from "../../pages";

interface OwnProps {
}

type Props = OwnProps & IconBaseProps;

const WayOfTheForceSetIcon: NextFunctionComponent<Props> = Props => {
  return (
    <IconBase viewBox="0 0 38 32" {...Props}>
      <path
        d="M36.593 12.4q.576.448.832.944t-.032.496q-.16-.16-.352-.256-.16-.064-.416-.08t-.576.144q-.576.288-1.008.64t-.944.96q-.256.256-.72.864t-.992 1.28-1.056 1.28-.944.832q-.736.448-1.216.704t-.768.416q-.352.16-.512.224-.224.224-.384.512-.16.256-.272.592t-.144.752q-.128.544-.464.912t-.736.64-.816.448-.704.368q-.32.192-.976.496t-1.424.608-1.568.528-1.408.224q-.736 0-1.6-.224t-1.68-.528-1.472-.608-.976-.496q-.288-.192-.688-.368t-.768-.448-.624-.64-.256-.912-.192-.88-.448-.56q-.288-.256-.64-.384-.192-.032-.448-.16-.448-.192-1.376-.8-.288-.192-.8-.448t-1.12-.72-1.28-1.184-1.344-1.872q-.192-.32-.48-.672t-.592-.656-.576-.528-.464-.32q-.16-.064-.336-.08t-.336-.032-.304-.128-.176-.368q.032-.128.096-.256.128-.256.384-.384.48-.16.96-.24t1.408-.08q.32 0 .944.16t1.36.384 1.456.464 1.2.432q.448.16.848.064t.72-.32q.352-.224.672-.608 0-.224.08-.848t.368-1.408.864-1.664 1.568-1.632 2.464-1.28 3.584-.624q2.72.16 4.304.992T25.745 8t1.2 2.304.496 2.096q.192.48.64.736.352.224 1.024.24t1.696-.464q.448-.192.912-.432t.912-.448.928-.368.96-.16q.608 0 1.136.304t.944.592zm-19.2 7.52q-.192 0-.32.064-.288.128-.288.448t.288.384q.128.064.32.032l.352.512 2.08-.032.416-.48q.32 0 .432-.016t.176-.464q0-.192-.08-.272t-.208-.144q-.128-.032-.32-.032-.064-.192-.112-.32t-.176-.208-.4-.112-.784-.032q-.48 0-.864.064t-.512.608zm-5.76-2.784q.384.512.8.928.352.352.8.656t.896.272q.544 0 1.056-.224t.928-.48q.48-.32.896-.704-.384-.512-.8-.928-.352-.352-.8-.656t-.928-.304q-.64 0-1.152.24t-.896.496q-.448.32-.8.704zm11.872 1.856q.48 0 .928-.288t.8-.64q.416-.384.8-.928-.384-.384-.832-.704-.384-.256-.912-.496t-1.136-.24q-.48 0-.928.304t-.8.656q-.416.416-.768.928.48.384.992.704.448.256.928.48t.928.224z"/>
    </IconBase>
  );
};

export default WayOfTheForceSetIcon;
