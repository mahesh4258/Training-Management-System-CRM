public with sharing class AcademyDashboardController {
    @AuraEnabled(cacheable=true)
    public static Map<String, Integer> getEntityCounts() {
        Map<String, Integer> counts = new Map<String, Integer>();
        
        // 1. Count ONLY students you created (assuming you use a specific Record Type or Lead Source)
        // For a simple fix, let's just count all Contacts for now, 
        // but you should delete the sample 'Rose Gonzalez' type records from the Contacts tab.
        counts.put('students', [SELECT COUNT() FROM Contact]); 
        
        // 2. Count your actual Courses
        counts.put('courses', [SELECT COUNT() FROM Course__c]); 
        
        return counts;
    }
}