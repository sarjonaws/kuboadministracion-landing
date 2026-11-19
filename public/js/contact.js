/* ===== CONFIGURACIÓN DE CONTACTO (reemplazar por datos reales si se desea) ===== */
window.KUBO = {
  cfg: { whatsapp: '529981234567', email: 'contacto@kuboadministracion.mx', formEndpoint: '/api/contacto' },
  openWA: function (u) { window.open(u, '_blank', 'noopener'); },
  openMail: function (u) { window.location.href = u; }
};
(function () {
  var K = window.KUBO, form = document.getElementById('kubo-form');
  if (!form) return;
  var note = document.getElementById('form-note'), btn = form.querySelector('.btn-submit');
  var fab = document.querySelector('.whatsapp-fab'); if (fab) fab.href = 'https://wa.me/' + K.cfg.whatsapp;
  function val(id) { var e = document.getElementById(id); return e && e.value ? e.value.trim() : ''; }
  function data() { return { nombre: val('nombre'), email: val('email'), telefono: val('telefono'), condominio: val('condominio'), unidades: val('unidades'), mensaje: val('mensaje') }; }
  function texto(d) {
    var t = 'Hola, soy ' + d.nombre + '. Quiero solicitar una cotización de administración de condominio con KUBO.';
    if (d.condominio) t += '\nCondominio: ' + d.condominio;
    if (d.unidades) t += '\nUnidades: ' + d.unidades;
    if (d.telefono) t += '\nTeléfono: ' + d.telefono;
    if (d.email) t += '\nCorreo: ' + d.email;
    if (d.mensaje) t += '\nMensaje: ' + d.mensaje;
    return t;
  }
  document.getElementById('btn-wa').addEventListener('click', function () {
    if (!document.getElementById('nombre').reportValidity()) return;
    K.openWA('https://wa.me/' + K.cfg.whatsapp + '?text=' + encodeURIComponent(texto(data())));
    note.textContent = 'Se abrió WhatsApp con tu mensaje listo para enviar.';
  });
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var d = data();
    if (!K.cfg.formEndpoint) {
      K.openMail('mailto:' + K.cfg.email + '?subject=' + encodeURIComponent('Solicitud de cotización - ' + (d.condominio || d.nombre)) + '&body=' + encodeURIComponent(texto(d)));
      note.textContent = 'Se abrió tu app de correo con el mensaje. Si no se abrió, escríbenos a ' + K.cfg.email + ' o usa WhatsApp.';
      return;
    }
    btn.disabled = true; note.textContent = 'Enviando…';
    fetch(K.cfg.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(d) })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); form.classList.add('is-sent'); note.textContent = ''; form.reset(); })
      .catch(function () { note.textContent = 'No pudimos enviar el formulario. Intenta de nuevo o escríbenos por WhatsApp.'; })
      .then(function () { btn.disabled = false; });
  });
  document.getElementById('btn-again').addEventListener('click', function () { form.classList.remove('is-sent'); note.textContent = ''; });
})();