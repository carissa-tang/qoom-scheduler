# Qoom Scheduler
======
**Members:** Amy Palm and Carissa Tang

**Project Topic:** Appointment Scheduling App (e.g. [calendly](https://calendly.com/qoom) or [strawpoll](https://strawpoll.com/meetings))

**Link to Project**:
- [https://schedule.qoom.group/schedule](https://schedule.qoom.group/schedule) 


## REMAINING TASKS
> [schedule.html](https://www.carissatang.com/qoomscheduler/schedule.html)
> - make meeting length times into two columns
> - make meeting length required
> 
> [scheduleravailability.html](https://www.carissatang.com/qoomscheduler/scheduleravailability.html) 
> - **fix remove buttons — merge draft page with this page**
> - **fix CSS for additional dates sections**
> - **add dropdown menu to choose timezone**
> - keep form details when you go back to previous page
> - improve UX for “select times”
>
> [shareevent.html](https://www.carissatang.com/qoomscheduler/shareevent.html)
> - fix layout of white box (date and times in two columns)
> - fix overall UI


> [attendeewelcome.html](https://www.carissatang.com/qoomscheduler/attendeewelcome.html)
> - fix CSS for blue box (mobile)
>
> [attendeeavailability.html](https://www.carissatang.com/qoomscheduler/attendeeavailability.html)
> - **display only available time slots (take into consideration times and meeting interval)**
> - **display timezone**
>
> [attendeecheckout.html](https://www.carissatang.com/qoomscheduler/attendeecheckout.html) 
> - **display timezone**
> - **send automatic email with checkout information**

> GENERAL COMMENTS
> - **save information into a spreadsheet**
> - all pages: extend gold line to the entire middle section
> - change format of date (i.e. from 2020-11-04 to November 4, 2020)


---
## UPDATES
- **Meeting:** Sat, Oct 10, 2020 8pm PDT / 11pm EDT
- **Meeting:** Sun, Oct 18, 2020 1pm PDT / 4pm EDT
- **Meeting:** Sun, Oct 25, 2020 11pm PDT / 2pm EDT
- **Meeting:** Sat, Nov 1, 2020 11:30am PDT / 2:30pm EDT
- **Meeting:** Sat, Nov 16, 2020 2pm PDT / 5pm EDT
- **Meeting:** Sat, Nov 28, 2020 5:30pm PDT / 8:30pm EDT

### Nov 28
- **Done:** Fixed pages that display inputted information (share event, welcome), fixed minor bugs
- **To do:** See above
### Oct 20
- **To do:** Finish JS for availability pages. Figure out how to save data after selecting "back".
### Oct 13
- **Done:** Finished the UI design on [Figma](https://www.figma.com/file/RLN1RKknUNlHuwADjCmNtx/Appointment-Scheduling-App?node-id=0%3A1) (—UI needs some edits in the future). Finished most of the HTML/CSS for scheduler pages (3). Figured out how to store data and transfer to next page.
- **To do:** Finish HTML/CSS for scheduler pages. Fix up JS on pg. 2 and pg. 3 (data needs to be stored in database). Complete HTML/CSS for attendee pages (4).

---
## TIMELINE
> - **Oct 6 - 12:** Create brief key screens using Figma ([edit here](https://www.figma.com/file/RLN1RKknUNlHuwADjCmNtx/Appointment-Scheduling-App?node-id=0%3A1)). Start recreating visuals for scheduler (from Figma).
> - **Oct 13 - 19:** Finish visuals for scheduler. Recreate basic visuals for attendee.
> - **Oct 20 - 26:**  Scheduler - Make the "choose available time intervals" feature
> - **Oct 27 - Nov 2:** Link the two parties (scheduler's availability displayed to attendee's page)
> - **Nov 3 - 9:**  JS for Attendee - "select preferred time slot" feature
> - **Nov 10 - 16:** Send confirmation email to both parties
> - **Nov 17 - 23:** Debug/Edit and finalize
> - **Nov 24 - 30:** Debug/Edit and finalize

## PLAN / TASKS BREAKDOWN
### Scheduler
> 1. Create meeting event: form to enter event name, description, event link, event duration
> 2. Choose availability (hours and days - choose timezone): display as drop down menu
> - code: make a list of all possible time intervals (must correspond to chosen event duration) &rightarrow; when user clicks a timeslot, chosen timeslot will be appended to a new list &rightarrow; new list will be what attendee sees (on a separate page?)
> 3. Receive email from attendees who set up an appointment

Possible features:
- allow scheduler to add recurring meeting / times (e.g. button for "add to all Tuesdays at 8pm")
- inviting/adding other attendees or guests to scheduled meeting by email
- allow only certain attendees to access
- display availability in calendar format

### Attendee
> 1. View all available hours/days (including chosen time zone)
> 2. Select single time slot from given options
> 3. Fill out form (input name, email, and purpose of appointment/comments/questions)
> 4. Confirm selected time slot
> 5. Confirmation page displaying event details (name, chosen date, time, etc.)
> 5. Receive email confirmation containing all event details

Once the time slot is confirmed, remove selected time/day from 
original list.
