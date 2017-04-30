<?php
/*
 * Poll controller class to handle all session related operations
 */ 
class CsvController extends ControllerBase implements IController
{
  public function execute()
  {
    switch($this->requestedMethod())
    {
      case "parse":
        return null;
    }
  }
}

return new CsvController($entityManager);