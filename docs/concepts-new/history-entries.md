---
id: history-entries
title: All possible Workflow Execution History Entries
sidebar_label: History Entries
---

The following is a complete list of all possible History Entries that could appear in a Workflow Execution History.
Each entry corresponds to an `enum` that is defined in the [Server API](https://github.com/temporalio/api/blob/master/temporal/api/enums/v1/event_type.proto).

There are two types of History Entries, "Commands" and "Events".

## Commands

## Events

### WorkflowExecutionStarted

This is always the first History Entry in a Workflow Execution History and it indicates that the execution was invoked.
This History Entry contains the following details:

- Workflow Type
- Parent Workflow Namespace
- Parent Initiated EventId
- Task Queue Name
- Task Queue Kind
- Workflow Execution Timeout
- Workflow Run Timeout
- Workflow Task Timeout
- Continued Execution RunId
- Initiator
- Original Execution RunId
- Identity
- First Execution RunId
- Attempt
- Cron Schedule
- First Workflow Task Backoff

### WorkflowExecutionCompleted

This event type indicates that the Workflow Execution has successfully completed and contains Workflow Execution results.

### WorkflowExecutionFailed

This event type indicates that the Workflow execution has unsuccessfully completed and contains the Workflow execution error.

### WorkflowExecutionTimedOut

This event type indicates that the Workflow execution has timed out by the Temporal Server due to the Workflow having not been completed within timeout settings.

### WorkflowExecutionCancelRequested

This event type indicates that a request has been made to cancel the Workflow execution.

### WorkflowExecutionCanceled

This event type indicates that the client has confirmed the cancellation request and the Workflow execution has been cancelled.

### WorkflowExecutionSignaled

This event type indicates the Workflow has received a Signal event.
The event type contains the Signal name, as well as a Signal payload.

### WorkflowExecutionTerminated

This event type indicates that the Workflow execution has been forcefully terminated and that likely the terminate Workflow API was called.

### WorkflowExecutionContinuedAsNew

This event type indicates that the Workflow has successfully completed and a new Workflow has been started within the same transaction.
This event type contains last Workflow execution results as well as new Workflow execution inputs.

### WorkflowTaskScheduled

This event type indicates that the Workflow Task has been scheduled.
The SDK client should now be able to process any new history events.

### WorkflowTaskStarted

This event type indicates that the Workflow Task has started.
The SDK client has picked up the Workflow Task and is processing new history events.

### WorkflowTaskCompleted

This event type indicates that the Workflow Task completed.
The SDK client picked up the Workflow Task, processed new history events, and may or may not ask the Temporal Server to do additional work.
It is possible for the following events to still occur:

- [ActivityTaskScheduled](#activitytaskscheduled)
- [TimerStarted](#timerstarted)
- [UpsertWorkflowSearchAttributes](#upsertworkflowsearchattributes)
- [MarkerRecorded](#markerrecorded)
- [StartChildWorkflowExecutionInitiated](#startchildworkflowexecutioninitiated)
- [RequestCancelExternalWorkflowExecutionInitiated](#requestcancelexternalworkflowexecutioninitiated)
- [SignalExternalWorkflowExecutionInitiated](#signalexternalworkflowexecutioninitiated)
- [WorkflowExecutionCompleted](#workflowexecutioncompleted)
- [WorkflowExecutionFailed](#workflowexecutionfailed)
- [WorkflowExecutionCanceled](#workflowexecutioncanceled)
- [WorkflowExecutionContinuedAsNew](#workflowexecutioncontinuedasnew)

### WorkflowTaskTimedOut

This event type indicates that the Workflow Task encountered a timeout.
Either an SDK client with a local cache was not available at the time, or it took too long for the SDK client to process the task.

### WorkflowTaskFailed

This event type indicates that the Workflow Task encountered a failure.
Usually this means that the Workflow was non-deterministic.
However, the Workflow reset functionality also uses this event.

### ActivityTaskScheduled

This event type indicates that an Activity Task was scheduled.
The SDK client should pick up this activity task and execute.
This event type contains activity inputs, as well as activity timeout configurations.

### ActivityTaskStarted

This event type indicates that the Activity Task has started executing.
The SDK client has picked up the Activity Task and is processing the Activity invocation.

### ActivityTaskCompleted

This event type indicates that the Activity Task has completed.
The SDK client has picked up and successfully completed the Activity Task.
This event type contains Activity execution results.

### ActivityTaskFailed

This event type indicates that the Activity Task has completed.
The SDK picked up the Activity Task but unsuccessfully completed it.
This event type contains Activity execution errors.

### ActivityTaskTimedOut

This event type indicates that the Activity has timed out according to the Temporal Server, due to the Activity having not completed within the timeout settings.

### ActivityTaskCancelRequested

This event type indicates that a request to cancel the Activity has occurred.
The SDK client will be able to confirm cancellation of an Activity during an Activity heartbeat.

### ActivityTaskCanceled

This event type indicates that the Activity has been cancelled.

### TimerStarted

This event type indicates a timer has started.

### TimerFired

This event type indicates a timer has fired.

### TimerCanceled

This event type indicates a Timer has been cancelled.

### RequestCancelExternalWorkflowExecutionInitiated

This event type indicates that a Workflow has requested that the Temporal Server try to cancel another Workflow.

### RequestCancelExternalWorkflowExecutionFailed

This event type indicates that Temporal Server could not cancel the targeted Workflow.
This is usually because the target Workflow could not be found.

### ExternalWorkflowExecutionCancelRequested

This event type indicates that the Temporal Server has successfully requested the cancellation of the target Workflow.

### ExternalWorkflowExecutionSignaled

This event type indicates that the Temporal Server has successfully Signaled the targeted Workflow.

### MarkerRecorded

This event type is transparent to the Temporal Server.
The Server will only store it and will not try to understand it.
The SDK client may use it for local activities or side effects.

### StartChildWorkflowExecutionInitiated

This event type indicates that the Temporal Server will try to start a child Workflow.

### StartChildWorkflowExecutionFailed

This event type indicates a child Workflow execution cannot be started / triggered.
It is usually due to a child Workflow ID collision.

### ChildWorkflowExecutionStarted

This event type indicates a child Workflow execution has successfully started / triggered.
This would also cause the [WorkflowExecutionStarted](#workflowexecutionstarted) to be recorded for the Workflow that has started.

### ChildWorkflowExecutionCompleted

This event type indicates that the child Workflow execution has successfully completed.
This would also cause the [WorkflowExecutionCompleted](#workflowexecutioncompleted) to be recorded for the Workflow that has completed.

### ChildWorkflowExecutionFailed

This event type indicates that the child Workflow execution has unsuccessfully completed.
This would also cause the [WorkflowExecutionFailed](#workflowexecutionfailed) to be recorded for the Workflow that has failed.

### ChildWorkflowExecutionCanceled

This event type indicates that the child Workflow execution has been cancelled.
This would also cause the [WorkflowExecutionCanceled](#workflowexecutioncanceled) to be recorded for the Workflow that was canceled.

### ChildWorkflowExecutionTimedOut

This event type indicates that the child Workflow execution has timed out by the Temporal Server.
This would also cause the [WorkflowExecutionTimeOut](#workflowexecutiontimedout) to be recorded for the Workflow that timed out.

### ChildWorkflowExecutionTerminated

This event type indicates that the child Workflow execution has been terminated.
This would also cause the [WorkflowExecutionTerminated](#workflowexecutionterminated) to be recorded for the Workflow that was terminated.

### SignalExternalWorkflowExecutionInitiated

This event type indicates that the Temporal Server will try to Signal the targeted Workflow.
This event type contains the Signal name, as well as a Signal payload.

### SignalExternalWorkflowExecutionFailed

This event type indicates that the Temporal Server cannot Signal the targeted Workflow, usually because the Workflow could not be found.

### UpsertWorkflowSearchAttributes

This event type indicates that the Workflow search attributes should be updated and synchronized with the visibility store.
