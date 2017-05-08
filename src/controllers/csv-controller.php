<?php
/*
 * Poll controller class to handle all session related operations
 */ 
class CsvController extends ControllerBase implements IController
{
  private function parseFile($format, $file)
  {
    include __DIR__ .  "/issue.php";

    $issues = [];
    // Open file from http://stackoverflow.com/a/13246630
    $handle = fopen($file, "r");
    if ($handle) 
    {
        while (($line = fgets($handle)) !== false) 
        {
            $issue_line = explode(';', $line);
            $issues[] = new Issue(intval($issue_line[0]), $issue_line[1]);
        }

        fclose($handle);
    } 
    else 
    {
        // error opening the file.
    }

    return $issues; 
  }

  public function execute()
  {
    switch($this->requestedMethod())
    {
      case "parse":
        $data = $this->jsonInput();
        return $this->parseFile($data['format'], $data['file']);
    }
  }
}

return new CsvController($entityManager);