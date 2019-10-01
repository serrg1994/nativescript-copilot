import { Vue } from 'vue-property-decorator';
import { Step, Layout, ValueXY, ArrowPosition, TooltipPosition, Points } from '../utils/types';
export default class CopilotModal extends Vue {
    private tooltip;
    private arrow;
    private arrowClipPath;
    private animatedValues;
    private notAnimated;
    private layout;
    private stepNumberPosition;
    private safeArea;
    private size;
    private position;
    private margin;
    private screenScale;
    private currentStep;
    private stepCount;
    private copilotVisible;
    private loaded;
    steps: Step[];
    animationDuration: number;
    tooltipStyle: object;
    androidStatusBarVisible: boolean;
    overlayColor: string;
    labels: object;
    accentColor: string;
    backgroundColor: string;
    private onLoaded;
    private getDeviceInfoAndroid;
    private getDeviceInfoIOS;
    private animateMove;
    start(): void;
    private next;
    private prev;
    private stop;
    readonly computedCopilotVisible: boolean;
    readonly computedCurrentStep: Step;
    readonly computedSize: ValueXY;
    readonly computedPosition: ValueXY;
    readonly computedLayout: Layout;
    readonly computedTooltip: TooltipPosition;
    readonly computedTooltipStyle: object;
    readonly computedArrow: ArrowPosition;
    readonly computedArrowClipPath: string;
    readonly computedSafeArea: Points;
}