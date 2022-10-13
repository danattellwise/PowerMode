export interface SalesFlow {
    Id: number;
    Title: string;
    CreatedAt: string;
    ModifiedAt: string;
    Scope: string;
    OwnerId: number;
    Tags: string;
    StepCount: number;
    TotalDays: number;
    WaitingRoomCount: number;
    ScheduledCount: number;
    StatusNoneCount: number;
    StatusWaitingOnTaskCount: number;
    StatusPausedCount: number;
    StatusFinishedAllStepsCount: number;
    StatusUnsubscribedCount: number;
    StatusRepliedCount: number;
    StatusRemovedCount: number;
    StatusStoppedCount: number;
    StatusFailedHardBounceCount: number;
    StatusFailedSoftBounceCount: number;
    StatusFailedAllCount: number;
    UsedByMeCount: number;
    UsedByOthersCount: number;
    Steps: Step[];
    TeamId?: number;
  }
   
  export interface Step {
    Id: number;
    SalesWorkflowTemplateId: number;
    Type: number;
    OffsetTimeSpan: string;
    IsBlocking: boolean;
    MessageTemplateId: number;
    Position: number;
    Note: string;
    IsDeleted: boolean;
    ScheduleDayOfWeek?: any[];
    IsReplyToPrevious: boolean;
    AdditionalCcUsers: any[];
    AdditionalBccUsers: any[];
    IsABTestingEnabled: boolean;
  }