package com.Crossword.Runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/feature/Testcase.feature",
		plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
		tags = {"@TC01_Register_and_Login_with_ValidInvalid_details, @TC02_Search_for_the_books_and_send_message_to_customer_care,"
				+ " @TC03_WindowHandling_Slider_Scrolling_Functionality, @TC04_Slider_and_Scrolling_functionality, "
				+ "@TC05_Update_profile_and_new_address"},
		glue = {"com.Crossword.StepDefinition"},
		monochrome = true
		)

public class Crossword_Runner 
{
	@AfterClass
	  public static void extendReport()
	{
		Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
	    Reporter.setSystemInfo("user", System.getProperty("user.name"));
	    Reporter.setSystemInfo("os", "Windows");
	    Reporter.setTestRunnerOutput("Sample test runner output message");
	}

}