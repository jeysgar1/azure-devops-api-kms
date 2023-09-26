Feature: App

  Scenario: Obtener una iniciativa
    Given La conexion con Azure DevOps
    When Solicito una iniciativa
    Then Obtengo la referencia